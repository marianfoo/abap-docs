  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0, EhP2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-71.htm) → 

ABAP Objects in Release 7.0, EhP2

[1\. Declaring Instance Constructors](#!ABAP_MODIFICATION_1@1@)

[2\. C Destructor](#!ABAP_MODIFICATION_2@2@)

[3\. Konstants in Class Pools](#!ABAP_MODIFICATION_3@3@)

Modification 1

Declaring Instance Constructors

As of Release 7.0, EhP2, the [METHODS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_constructor.htm) statement can be used to declare an [instance constructor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninstance_constructor_glosry.htm "Glossary Entry") in all [visibility areas](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvisibility_section_glosry.htm "Glossary Entry"), the instantiablity of which is more general than or equal to that specified in the [CREATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_options.htm) addition of the [CLASS DEFINITION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_definition.htm) statement. Until now, this was only possible with the public visibility area (change has already been downported to Release 7.0).

Modification 2

C Destructor

As of Release 7.0, EhP2, more than one attribute can be passed in SYSTEM-CALL in the [C Destructor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenc_destructor.htm).

Modification 3

Constants in Class Pools

As of Release 7.0, EhP2, it is possible to declare program local constants in a class pool where the gloabal classes can access their private components and their methods.