class Sensor{
    constructor(){
        this.rayCount = 30;
        this.rayLength = 200;
        this.raySpread = Math.PI/2;

        this.rays = [];
        this.readings = [];
    }

    update(x, y, angle, roadBorders){
        this.#castRays(x, y, angle);
        this.readings = [];
        // for(let i=0; i<this.rays.length; i++){
        //     this.readings.push(
        //         this.#getReading(this.rays[i], roadBorders)
        //     );
        // }
    }

    #getReading(ray, roadBorders){
        let touches = [];

        for(let i=0; i<roadBorders.length; i++){
            const touch = getIntersection(
                ray[0],
                ray[1],
                roadBorders[i][0],
                roadBorders[i][1]
            );
            if(touch){
                touches.push(touch)
            }
        }

        if(touches.length==0){
            return null;
        } else {
            const offsets = touches.map(e => e.offsets);
            const minOffset = Math.min(...offsets);
            return touches.find(e => e.offset == minOffset);
        }
    }

    #castRays(x, y, angle){
        this.rays = [];
        for(let i=0; i<this.rayCount; i++){
            const rayAngle = linearInterpolation(
                this.raySpread/2,
                -this.raySpread/2,
                this.rayCount==1?0.5:i/(this.rayCount-1)
            ) + angle;
            const start = { x, y };
            const end = {
                x:x-Math.sin(rayAngle)*this.rayLength,
                y:y-Math.cos(rayAngle)*this.rayLength
            };
            this.rays.push([start, end]);
        }   
    }

    draw(context){
        for(let i=0; i<this.rayCount; i++){
            let end = this.rays[i][1];
            if(this.readings[i]){
                end = this.readings[i];
            }
            context.beginPath();
            context.lineWidth=2;
            context.strokeStyle="blue";
            context.moveTo(
                this.rays[i][0].x-10,
                this.rays[i][0].y
            );
            context.lineTo(
                end.x,
                end.y
            );

            // context.strokeStyle="black";
            // context.moveTo(
            //     this.rays[i][1].x-10,
            //     this.rays[i][1].y
            // );
            // context.lineTo(
            //     end.x,
            //     end.y
            // );
            context.stroke();
        }
    }
}