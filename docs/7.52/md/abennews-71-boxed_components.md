  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0, EhP2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-71.htm) → 

Boxed Components in Release 7.0, EhP2

Structures or classes often have further structures as components which are not used every time a program is executed. This can lead to unnecessary memory usage, especially if these structures are instantiated multiple times. Examples are structures with substructures as a row type from internal tables or structures in classes that are frequently instantiated. To avoid unnecessary memory usage without this having to be programmed by ABAP developers, [static boxes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_box_glosry.htm "Glossary Entry") were introduced as a preliminary form of [boxed components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboxed_component_glosry.htm "Glossary Entry") in Release 7.0 (EhP2). Like strings and internal tables, these are based on an implicit referencing and support [initial value sharing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninitial_value_sharing_glosry.htm "Glossary Entry").

[1\. Structured types with static boxes](#!ABAP_MODIFICATION_1@1@)

[2\. Attributes of classes as static boxes](#!ABAP_MODIFICATION_2@2@)

[3\. Enhancements to RTTS for static boxes](#!ABAP_MODIFICATION_3@3@)

Modification 1

Structured types with static boxes

Within a structure definition using [TYPES BEGIN OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_struc.htm), the [BOXED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_boxed.htm) addition of TYPES can be used to create a substructure as a static box.

Modification 2

Attributes of classes as static boxes

Within a class declaration, the [BOXED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_boxed.htm) addition of DATA can be used to create a structured attribute as a static box.

Modification 3

Enhancements to RTTS for static boxes

The class CL\_ABAP\_TYPEDESCR contains the new constant TYPEKIND\_BREF for static boxes. The value of these constants is specified as the type of a static box in the component table COMPONENTS of the class CL\_ABAP\_STRUCTDESCR. The return code of the method GET\_COMPONENTS of the class CL\_ABAP\_STRUCTDESCR contains boxed components and reference variables as type description objects of the class CL\_ABAP\_REFDESCR. The method GET\_REFERENCED\_TYPE of this class gets a type description object for the substructure. A type description object of the class CL\_ABAP\_REFDESCR, which describes a boxed component, cannot be used in the statements [CREATE DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data.htm) or [ASSIGN CASTING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_casting.htm).