import {$, $$} from '/modules/selector.js';

// STARFIELD
export let lightspeed = function() {
    class Canvas {
        /**
         * Canvas constructor
         * @param  {Mixed} canvas Canvas element or CSS3 string
         */
        constructor(canvas) {
            this.canvas =
                typeof canvas === "string" ? $(canvas) : canvas;
            this.ctx = this.canvas.getContext("2d");
        }
    
        /**
         * Resize the canvas
         * @param  {Number} w 	Width in px
         * @param  {Number} h 	Height in px
         * @return {Object}   	Instance  reference
         */
        resize(w, h) {
            this.save();
    
            this.canvas.width = this.width = w;
            this.canvas.height = this.height = h;
    
            this.rects = this.canvas.getBoundingClientRect();
    
            this.load();
    
            return this;
        }
    
        bg(color) {
            this.ctx.fillStyle = color;
            this.ctx.fillRect(0, 0, this.width, this.height);
        }
    
        /**
         * Save the canvas data
         * @param  {Boolean} data
         * @return {Object} image data or instance reference
         */
        save(data) {
            this.data = this.ctx.getImageData(
                0,
                0,
                this.canvas.width,
                this.canvas.height
            );
    
            return data ? data : this;
        }
    
        /**
         * Load the canvas data
         * @param  {Boolean} data
         * @return {Object} image data or instance reference
         */
        load(data) {
            this.ctx.putImageData(this.data, 0, 0);
    
            return data ? data : this;
        }
    
        /**
         * Clear the canvas
         * @return {Object} Instance reference
         */
        clear() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
            return this;
        }
    }
    
    class Starfield {
        constructor(canvas, options) {
            const defaults = {
                starColor: "rgba(255,255,255,1)",
                bgColor: "rgba(0,0,0,1)",
                speed: 3,
                quantity: 1000,
                ratio: 256,
            };
            this.canvas = canvas;
            this.ctx = canvas.ctx;
            this.options = Object.assign({}, defaults, options);
            
            this.init();
        }
    
        // Resize the canvas
        resizer() {
            
            var oldStar = this.star;
            var initW = this.canvas.width;
            var initH = this.canvas.height;
    
            this.w = window.innerWidth;
            this.h = window.innerHeight;
            this.x = Math.round(this.w / 2);
            this.y = Math.round(this.h / 2);
    
            // Check if the device is in portrait orientation
            this.portrait = this.w < this.h;
            
            // Get the ratio of the old height to the new height
            var ratX = this.w / initW;
            var ratY = this.h / initH;
            
            this.canvas.resize(this.w, this.h);
    
            // Recalculate the position of each star proportionally to new w and h
            for (var i = 0; i < this.n; i++) {
                this.star[i][0] = oldStar[i][0] * ratX;
                this.star[i][1] = oldStar[i][1] * ratY;
    
                this.star[i][3] =
                    this.x + this.star[i][0] / this.star[i][2] * this.star_ratio;
                this.star[i][4] =
                    this.y + this.star[i][1] / this.star[i][2] * this.star_ratio;
            }
    
        }
    
        init() {
            this.initialised = false;
            this.running = false;
            this.flag = true;
            this.test = true;
            this.w = 0;
            this.h = 0;
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.n = this.options.quantity;
            this.star_color_ratio = 0;
            this.star_x_save = 0;
            this.star_y_save = 0;
            this.star_ratio = this.options.ratio;
            this.star_speed = this.options.speed;
            this.star = new Array(this.n);
            this.color = this.options.starColor;
            this.opacity = 0.1;
    
            // Check for device orientation support
            this.desktop = !navigator.userAgent.match(
                /(iPhone|iPod|iPad|Android|BlackBerry|BB10|IEMobile)/
            );
            this.orientationSupport = window.DeviceOrientationEvent !== undefined;
            this.portrait = null;
            
            this.canvas.resize(window.innerWidth, window.innerHeight);	
            
            this.w			= this.canvas.width;
            this.h			= this.canvas.height;
    
            this.initW		= this.w;
            this.initH		= this.h;
    
            this.portrait	= this.w < this.h;
    
            // Create initial star array and canvas context
    
            this.x = Math.round(this.w / 2);
            this.y = Math.round(this.h / 2);
            this.z = (this.w + this.h) / 2;
            this.star_color_ratio = 1 / this.z;
    
            this.initStars();
    
            // Set the colors
            this.ctx.fillStyle = this.options.bgColor;
            this.ctx.strokeStyle = this.options.starColor;
            
            this.events = {
                loop: this.loop.bind(this),
                resizer: this.resizer.bind(this),
            };
            
            window.addEventListener(
                "resize",
                this.events.resizer,
                false
            );
    
            window.addEventListener(
                "orientationchange",
                this.events.resizer,
                false
            );		
        }
        
        initStars() {
            for (var i = 0; i < this.n; i++) {
                this.star[i] = new Array(5);
    
                this.star[i][0] = Math.random() * this.w * 2 - this.x * 2;
                this.star[i][1] = Math.random() * this.h * 2 - this.y * 2;
                this.star[i][2] = Math.round(Math.random() * this.z);
                this.star[i][3] = 0;
                this.star[i][4] = 0;
            }
        }
    
        animate() {
            this.canvas.bg(this.options.bgColor);
    
            this.ctx.strokeStyle = this.options.starColor;
            
    
            for (var i = 0; i < this.n; i++) {
                const star = this.star[i];
                this.test = true;
                this.star_x_save = star[3];
                this.star_y_save = star[4];
                // star[0] += this.mouse_x >> 4;
    
                // X coords
                if (star[0] > this.x << 1) {
                    star[0] -= this.w << 1;
                    this.test = false;
                }
                if (star[0] < -this.x << 1) {
                    star[0] += this.w << 1;
                    this.test = false;
                }
    
                // Y coords
                if (star[1] > this.y << 1) {
                    star[1] -= this.h << 1;
                    this.test = false;
                }
                if (star[1] < -this.y << 1) {
                    star[1] += this.h << 1;
                    this.test = false;
                }
    
                // Z coords
                star[2] -= this.star_speed;
                if (star[2] > this.z) {
                    star[2] -= this.z;
                    this.test = false;
                }
                if (star[2] < 0) {
                    star[2] += this.z;
                    this.test = false;
                }
    
                star[3] =
                    this.x + star[0] / star[2] * this.star_ratio;
                star[4] =
                    this.y + star[1] / star[2] * this.star_ratio;
    
                if (
                    this.star_x_save > 0 &&
                    this.star_x_save < this.w &&
                    this.star_y_save > 0 &&
                    this.star_y_save < this.h &&
                    this.test
                ) {
                    this.ctx.lineWidth = (1 - this.star_color_ratio * star[2]) * 2;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.star_x_save, this.star_y_save);
                    this.ctx.lineTo(star[3], star[4]);
                    this.ctx.stroke();
                    this.ctx.closePath();
                }
            }
        }
    
        loop() {
            this.animate();
    
            this.tick = window.requestAnimationFrame(this.events.loop);
        }
    
        stop() {
            window.cancelAnimationFrame(this.tick);
    
            this.running = false;
        }
    
        start() {
            if (!this.running) {
                this.running = true;
                this.loop();
            }
    
            return this;
        }
    }
    const CANVAS = new Canvas("#starfield").resize(window.innerWidth, window.innerHeight);
    const FIELD = new Starfield(CANVAS, {
        speed: 2
    }).start();
    
    // Starfield Magic
    let starfieldCanvas = $('#starfield');
    setTimeout(function(){
      starfieldCanvas.style = 'animation: fadeOut 5s ease forwards';
      setTimeout(function(){
        FIELD.stop();
      }, 5000);
    }, 6800);
}