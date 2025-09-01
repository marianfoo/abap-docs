  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0, EhP2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-71.htm) → 

ABAP Objects in Release 7.0, EhP2

[1\. Declaring instance constructors](#!ABAP_MODIFICATION_1@1@)

[2\. C destructor](#!ABAP_MODIFICATION_2@2@)

[3\. Constants in class pools](#!ABAP_MODIFICATION_3@3@)

Modification 1

Declaring Instance Constructors

From Release 7.0, EhP2, the statement [METHODS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethods_constructor.htm) can be used to declare an [instance constructor](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_constructor_glosry.htm "Glossary Entry") in all [visibility sections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvisibility_section_glosry.htm "Glossary Entry"), whose instantiability is more general than or equal to that specified in the addition [CREATE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_options.htm) of the statement [CLASS DEFINITION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_definition.htm). Until now, this was only possible with the public visibility section (this modification was also transported to Release 7.0).

Modification 2

C Destructor

From Release 7.0, EhP2, more than one attribute can be passed in the [C destructor](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenc_destructor.htm) when SYSTEM-CALL is used.

Modification 3

Constants in Class Pools

From Release 7.0, EhP2, local program constants can be declared in a class pool. The private components and methods of the global class can access these constants.