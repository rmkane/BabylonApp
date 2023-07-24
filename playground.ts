class Playground {
    public static CreateScene(engine: BABYLON.Engine, canvas: HTMLCanvasElement): BABYLON.Scene {
        // This creates a basic Babylon Scene object (non-mesh)
        const scene = new BABYLON.Scene(engine);

        const camera = new BABYLON.ArcRotateCamera("camera", BABYLON.Tools.ToRadians(90), BABYLON.Tools.ToRadians(65), 10, BABYLON.Vector3.Zero(), scene);

        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);

        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.7;

        // Our built-in 'ground' shape. Params: name, options, scene
        const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
        const groundMaterial = new BABYLON.StandardMaterial("Ground Material", scene);
        const groundTexture = new BABYLON.Texture(Assets.textures.wood_jpg.path, scene);
        groundMaterial.diffuseTexture = groundTexture;
        ground.material = groundMaterial;

        BABYLON.SceneLoader.ImportMesh("", Assets.meshes.tree1_glb.rootUrl, Assets.meshes.tree1_glb.filename, scene, function(newMeshes) {
            newMeshes[0].scaling = new BABYLON.Vector3(0.2, 0.2, 0.2);
        });

        return scene;
    }
}
