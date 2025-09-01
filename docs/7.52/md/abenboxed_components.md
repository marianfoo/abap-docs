  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Structures](javascript:call_link\('abendata_objects_structure.htm'\)) → 

Boxed Components

Boxed components are structures that are not saved in the higher-level context itself. Instead, an internal reference that points to the actual structure is stored in place of the structure. A boxed component is always a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") component of its context.

It is currently to possible to declare substructures of data types and structured attributes of classes as

-   [static boxes](javascript:call_link\('abenstatic_boxes.htm'\))

that support [initial value sharing](javascript:call_link\('abeninitial_value_sharing_glosry.htm'\) "Glossary Entry").

Notes

-   Boxed components are a halfway house between [static](javascript:call_link\('abenstatic_data_object_glosry.htm'\) "Glossary Entry") and [dynamic data objects](javascript:call_link\('abendynamic_data_object_glosry.htm'\) "Glossary Entry"). Their memory requirement has not already been defined when the program is started in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), but they can be handled like static data objects with a fixed length.

-   A nested structure that contains a boxed component as a component is always a [deep structure](javascript:call_link\('abendeep_structure_glosry.htm'\) "Glossary Entry").

-   Structures in ABAP Dictionary can also contain boxed components. ABAP Dictionary database tables cannot contain any boxed components as their structures have to be flat.

-   In the classes and objects of the [RTTS](javascript:call_link\('abenrtts_glosry.htm'\) "Glossary Entry"), boxed components are handled as follows:

-   The class CL\_ABAP\_TYPEDESCR contains the constant TYPEKIND\_BREF for static boxes. The value of these constants is specified as the type of a static box in the component table COMPONENTS of the class CL\_ABAP\_STRUCTDESCR or the attribute table ATTRIBUTES of the classes CL\_ABAP\_CLASSDESCR or CL\_ABAP\_INTFDESCR.

-   In the return code of the method GET\_COMPONENTS of the class CL\_ABAP\_STRUCTDESCR or GET\_ATTRIBUTE\_TYPE of the classes CL\_ABAP\_CLASSDESCR or CL\_ABAP\_INTFDESCR, boxed components are specified as type description objects of the class CL\_ABAP\_REFDESCR, like reference variables. The method GET\_REFERENCED\_TYPE of this class gets a type description object for the substructure. A type description object of the class CL\_ABAP\_REFDESCR, which describes a boxed component, cannot be used in the statements [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) or [ASSIGN CASTING](javascript:call_link\('abapassign_casting.htm'\)).

Continue
[Static Boxes](javascript:call_link\('abenstatic_boxes.htm'\))