  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstructure_style_guidl.htm) →  [Complexity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomplexity_guidl.htm) → 

Class Size

Background

The class size is the number of components (attributes, methods, events) of a class. The ABAP Compiler predefines a maximum number of 65,536 components. The total memory consumption by static attributes, instance attributes, and constants is restricted to 500KB in each case. With regards to deep data objects (tables, strings, and data references), only the fixed size of the reference is important and not the variable size of the referenced data object.

Rule

Maintain reasonable class sizes

Ensure that classes and interfaces do not contain an excessively high number of attributes, methods and events. The components contained must be class-specific and should not handle tasks that are extremely different from each other. The same applies to function groups.

Details

Complexity is not only important on the level of procedure implementations. The number of procedures to be considered and the data processed by these procedures are also very important when it comes to understanding the source code.

A class, interface or function group should not be mistaken as a container that can be used for any functionality. Function groups play the same role here as abstract final classes, which you cannot generate instances of. The function modules correspond to static public methods, and the global data corresponds to private static attributes. The situation should be viewed more as an abstraction of a certain subject or an object from real life. This modularization of a complex problem in objects of a manageable size makes it easier to understand the code. Therefore, the classes and interfaces must be designed appropriately and each class/interface must cover a manageable function that is easy to understand.

This is obviously not the case, if a class or an interface contains a large number of attributes and methods. The same applies to the number of function modules of a function group (with regard to the use of [function groups](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obj_progr_model_guidl.htm "Guideline")). Voluminous classes, interfaces, and function groups either provide functionality that is too heterogeneous or, conversely, are highly specialized, which restricts their reusability.

Besides the high degree of complexity, which makes it more difficult to maintain voluminous classes and function groups, you must consider another technical aspect: Even if you use a small part of the provided functionality, the entire class/function group is loaded into the program memory, which negatively impacts the memory usage.

Note

It is [preferable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenproc_volume_guidl.htm "Guideline") to use multiple procedures, which are not too large and have clearly defined tasks, instead of a small number of large procedures. On the other hand, classes should not contain too many methods. However, these two rules are not contradictory, provided that the procedures do not become too small and are appropriately grouped into different classes with a clearly defined task field. In this process, very specialized classes can be created that do not require global visibility.

Functionality that is only required in a global class, function group or any other program, should therefore be encapsulated in local classes. (All functions of function groups, subroutine pools, and executable programs [should](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") be implemented in local classes anyway). An example of this self-contained functionality is the display logic for [classical dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenencap_class_interf_guidl.htm "Guideline") within a function group. A meaningful reuse of classes that call the dynpros of the function group is not possible outside the function group. Therefore, local classes are the preferred elements for this task.

This procedure is also useful for global classes. By moving highly specialized functionality to smaller, local classes, you reduce the number of methods of the global class, which results in a clearer overview and makes the class easier to maintain. When you use local classes within global classes, make sure you position them appropriately to [avoid](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocal_type_glob_class_guidl.htm "Guideline") unnecessary dependencies.