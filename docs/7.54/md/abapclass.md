  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclasses_and_interfaces.htm) → 

CLASS

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_shortref.htm)

Syntax Forms

[Declaration Part of a Class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_definition.htm)
1\. CLASS class DEFINITION  *\[*[class\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_options.htm)*\]*.
    *\[*PUBLIC SECTION.
      *\[*[components](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_component.htm)*\]**\]*
    *\[*PROTECTED SECTION.
      *\[*[components](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_component.htm)*\]**\]*
    *\[*PRIVATE SECTION.
      *\[*[components](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclass_component.htm)*\]**\]*
  ENDCLASS.
[Implementation Part of a Class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_implementation.htm)
2\. CLASS class IMPLEMENTATION.
    ...
    METHOD ...
      ...
    ENDMETHOD.
    ...
  ENDCLASS.
[Publication of Classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_deferred.htm)
3\. CLASS class DEFINITION DEFERRED *\[*PUBLIC*\]*.
[Local Friends of Global Classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_local_friends.htm)
4\. CLASS class DEFINITION
              LOCAL FRIENDS class1 class2 ...
                            intf1  intf2  ...

Effect

The statement CLASS defines a class class, publishes it, or specifies properties.

-   The complete definition of a class consists of a [declaration part](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_definition.htm) and an [implementation part](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_implementation.htm), which are both introduced by CLASS and ended by ENDCLASS. In the declaration part, the properties of the class are specified and its components are declared. In the implementation part, the methods of the class are implemented.
    
-   The variants of CLASS without ENDCLASS are used for the [publication of classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_deferred.htm) in a program and the declaration of [local friends](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_local_friends.htm) of a global class.
    

The statements CLASS and associated statements ENDCLASS can be specified only in the global context of a program. CLASS and ENDCLASS cannot be specified within classes, procedures, and processing blocks implemented internally as a procedure (namely event blocks for [GET](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget-.htm) and [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_selection-screen.htm)) . This applies in particular to the variants of CLASS specified here, which is not closed using ENDCLASS.

Notes

-   The declaration part of a class, and the variants of CLASS not closed using ENDCLASS are handled like other declaration statements (DATA, TYPE, ...). In a processing block without a local context, they are handled like global program declarations and do not end the processing block.
    
-   Overall, the implementation part of a class works like a separate processing block and closes any other processing blocks.
    
-   The obsolete variant [CLASS ... DEFINITION LOAD](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_interface_load.htm) was formerly used to load classes explicitly.
    

Continue
[CLASS - DEFINITION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_definition.htm)
[CLASS - IMPLEMENTATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_implementation.htm)
[ENDCLASS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendclass.htm)
[CLASS - DEFERRED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_deferred.htm)
[CLASS - LOCAL FRIENDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclass_local_friends.htm)