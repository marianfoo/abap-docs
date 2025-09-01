  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [News for Release 7.0, EhP2](javascript:call_link\('abennews-71.htm'\)) → 

Boxed Components in Release 7.0, EhP2

Structures or classes often have further structures as components which are not used every time a program is executed. This can lead to unnecessary memory usage, especially if these structures are instantiated multiple times. Examples are structures with substructures as a line type from internal tables or structures in classes that are frequently instantiated. To avoid unnecessary memory usage without this having to be programmed by ABAP developers, [static boxes](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry") were introduced as a preliminary form of [boxed components](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry") in Release 7.0 (EhP2). Like strings and internal tables, these are based on an implicit referencing and support [initial value sharing](javascript:call_link\('abeninitial_value_sharing_glosry.htm'\) "Glossary Entry").

[1\. Structured Types with Static Boxes](#!ABAP_MODIFICATION_1@1@)
[2\. Attributes of Classes as Static Boxes](#!ABAP_MODIFICATION_2@2@)
[3\. Enhancements to RTTS for Static Boxes](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Structured Types with Static Boxes

Within a structure definition using [TYPES BEGIN OF](javascript:call_link\('abaptypes_struc.htm'\)), the addition [BOXED](javascript:call_link\('abaptypes_boxed.htm'\)) in TYPES can be used to create a substructure as a static box.

Modification 2   

Attributes of Classes as Static Boxes

Within a class declaration, the [BOXED](javascript:call_link\('abapdata_boxed.htm'\)) addition of DATA can be used to create a structured attribute as a static box.

Modification 3   

Enhancements to RTTS for Static Boxes

The class CL\_ABAP\_TYPEDESCR contains the new constant TYPEKIND\_BREF for static boxes. The value of these constants is specified as the type of a static box in the component table COMPONENTS of the class CL\_ABAP\_STRUCTDESCR. The return value of the method GET\_COMPONENTS of the class CL\_ABAP\_STRUCTDESCR contains boxed components and reference variables as type description objects of the class CL\_ABAP\_REFDESCR. The method GET\_REFERENCED\_TYPE of this class gets a type description object for the substructure. A type description object of the class CL\_ABAP\_REFDESCR, which describes a boxed component, cannot be used in the statements [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) or [ASSIGN CASTING](javascript:call_link\('abapassign_casting.htm'\)).