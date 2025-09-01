---
title: "RTTS - Runtime Type Services"
description: |
  The RTTS are implemented using a hierarchy of type description classes(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_class_glosry.htm 'Glossary Entry') that contain the methods for RTTC(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrttc_glosry.htm 'Glossary
version: "7.52"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrtti.htm"
abapFile: "abenrtti.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abenrtti"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Attributes of Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendescribe_field.htm) → 

RTTS - Runtime Type Services

The RTTS are implemented using a hierarchy of [type description classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_class_glosry.htm "Glossary Entry") that contain the methods for [RTTC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrttc_glosry.htm "Glossary Entry") (runtime type creation) and [RTTI](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrtti_glosry.htm "Glossary Entry") (runtime type identification). Using these system classes it is possible to

-   determine type information of existing [instances](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninstance_glosry.htm "Glossary Entry") and [type names](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_names.htm) in the [ABAP type system](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_objects_oview.htm) at runtime.

-   define new data types at runtime.

Concept

The properties of the types are represented by the attributes of [type description objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_object_glosry.htm "Glossary Entry"). For each type there is exactly one type description object. The attributes of the type description object contain information about the properties of the type. For each category of type (elementary type, table, class, and so on), there is a type description class with special attributes for the special type properties. The class hierarchy of the type description classes corresponds to the hierarchy of the type categories in the [ABAP type system](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_objects_oview.htm).

In addition, type description classes for complex types, references, classes, and interfaces have special methods for specifying references to partial types. These methods can be used can navigate to all partial types using a composite type.

Type description objects can only be created using the methods of type description classes. To get a reference to a type description object of a type, the static methods of the class CL\_ABAP\_TYPEDESCR can be used or call methods of the special type description classes.

Note

In the statement [CREATE DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data.htm), type description objects can be specified after the addition [HANDLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data_handle.htm) to create data objects with dynamically created data types.

Hierarchy of Type Description Classes

CL\_ABAP\_TYPEDESCR
  |
  |--CL\_ABAP\_DATADESCR
  |   |
  |   |--CL\_ABAP\_ELEMDESCR
  |   |   |
  |   |   |--CL\_ABAP\_ENUMDESCR
  |   |
  |   |--CL\_ABAP\_REFDESCR
  |   |--CL\_ABAP\_COMPLEXDESCR
  |       |
  |       |--CL\_ABAP\_STRUCTDESCR
  |       |--CL\_ABAP\_TABLEDESCR
  |
  |--CL\_ABAP\_OBJECTDESCR
     |
     |--CL\_ABAP\_CLASSDESCR
     |--CL\_ABAP\_INTFDESCR

Example

Reading the type attributes of an elementary type from a type object generated with the method DESCRIBE\_BY\_DATA.

TYPES my\_type TYPE p LENGTH 16 DECIMALS 6.
DATA  my\_data TYPE my\_type.
DATA(descr) = cl\_abap\_typedescr=>describe\_by\_data( my\_data ).
cl\_demo\_output=>display(
  |Typename: { descr->absolute\_name }\\n| &&
  |Kind:     { descr->type\_kind     }\\n| &&
  |Length:   { descr->length        }\\n| &&
  |Decimals: { descr->decimals      }\\n| ).

Example

Reading the attributes of the components of a structure. The reference to the type object is assigned using a down cast to a reference variable of type CL\_ABAP\_STRUCT\_DESCR.

cl\_demo\_output=>display( CAST cl\_abap\_structdescr(
  cl\_abap\_typedescr=>describe\_by\_name( 'SYST' ) )->components ).

Continue
![Example](exa.gif "Example") [Determining Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrtti_data_type_abexa.htm)
![Example](exa.gif "Example") [Determining Object Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrtti_object_type_abexa.htm)