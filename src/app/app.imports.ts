import { AppService } from '../services/app.service';
import { UserService } from '../services/user.service'
import { UploadService } from '../services/upload.service'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { CameraProvider } from '../providers/util/camera.provider';

export const PROVIDERS = [

    StatusBar,
    SplashScreen,
    AppService,
    UserService,
    UploadService,

    CameraProvider,
    Camera
]
