export function ProductFilter() {
    return (
        <div>
            Price : $
            <input type="number" min={0} max={999} /> - $
            <input type="number" min={0} max={999} /> 
        </div>
    );
}