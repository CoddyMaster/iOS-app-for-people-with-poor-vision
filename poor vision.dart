//application development concept


import 'package:pylons_sdk/pylons_sdk.dart';
import 'package:fixnum/fixnum.dart';
export 'src/types/recipe.dart';
export 'src/features/helper/dec_string.dart';


class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  State<MyApp> createState() => _MyAppState();
}
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Pylons Testapp',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Welcome to Pylons Testapp'),
    );
  }
}
