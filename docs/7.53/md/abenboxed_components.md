---
title: "Boxed Components"
description: |
  Boxed components are structures that are not saved in the higher-level context itself. Instead, an internal reference that points to the actual structure is stored in place of the structure. A boxed component is always a deep(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeep_glos
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenboxed_components.htm"
abapFile: "abenboxed_components.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abenboxed", "components"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_objects_structure.htm) → 

Boxed Components

Boxed components are structures that are not saved in the higher-level context itself. Instead, an internal reference that points to the actual structure is stored in place of the structure. A boxed component is always a [deep](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeep_glosry.htm "Glossary Entry") component of its context.

It is currently to possible to declare substructures of data types and structured attributes of classes as

-   [static boxes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatic_boxes.htm)

These boxes support [initial value sharing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninitial_value_sharing_glosry.htm "Glossary Entry").

Notes

-   Boxed components are a halfway house between [static](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatic_data_object_glosry.htm "Glossary Entry") and [dynamic data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynamic_data_object_glosry.htm "Glossary Entry"). Their memory requirements are not defined when the program is started in the [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry"), but these components can be handled like static data objects with a fixed length.

-   A nested structure that contains a boxed component as a component is always a [deep structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeep_structure_glosry.htm "Glossary Entry").

-   Structures of ABAP Dictionary can also contain boxed components. ABAP Dictionary database tables cannot contain any boxed components since their structures have to be flat.

-   In [RTTS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry") classes and objects, boxed components are handled as follows:

-   The class CL\_ABAP\_TYPEDESCR contains the constant TYPEKIND\_BREF for static boxes. The value of these constants is specified as the type of a static box in the component table COMPONENTS of the class CL\_ABAP\_STRUCTDESCR or the attribute table ATTRIBUTES of the classes CL\_ABAP\_CLASSDESCR or CL\_ABAP\_INTFDESCR.

-   In the return code of the method GET\_COMPONENTS of the class CL\_ABAP\_STRUCTDESCR or GET\_ATTRIBUTE\_TYPE of the classes CL\_ABAP\_CLASSDESCR or CL\_ABAP\_INTFDESCR, boxed components are specified as type description objects of the class CL\_ABAP\_REFDESCR, like reference variables. The method GET\_REFERENCED\_TYPE of this class gets a type description object for the substructure. A type description object of the class CL\_ABAP\_REFDESCR, which describes a boxed component, cannot be used in the statements [CREATE DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_data.htm) or [ASSIGN CASTING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_casting.htm).

Continue
[Static Boxes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatic_boxes.htm)