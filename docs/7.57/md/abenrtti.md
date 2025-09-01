  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Attributes of Data Objects](javascript:call_link\('abendescribe_field.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Runtime Type Services \(RTTS\), ABENRTTI, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion for improvement:)

Runtime Type Services (RTTS)

The [RTTS](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry") are implemented using a hierarchy of [type description classes](javascript:call_link\('abentype_class_glosry.htm'\) "Glossary Entry") that contain the methods for [Runtime Type Creation (RTTC)](javascript:call_link\('abenrun_time_type_creation_glosry.htm'\) "Glossary Entry") and [Runtime Type Identification (RTTI)](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry"). Using these system classes, it is possible to

-   determine type information of existing [instances](javascript:call_link\('abeninstance_glosry.htm'\) "Glossary Entry") and [type names](javascript:call_link\('abentype_names.htm'\)) in the [ABAP type system](javascript:call_link\('abentypes_objects_oview.htm'\)) at runtime.
-   define new data types at runtime.

Concept   

The properties of the types are represented by the attributes of [type description objects](javascript:call_link\('abentype_object_glosry.htm'\) "Glossary Entry"). For each type there is exactly one type description object. The attributes of the type description object contain information about the properties of the type. For each type category (elementary type, table, class, and so on), there is a type description class with special attributes for the special type properties. The class hierarchy of the type description classes corresponds to the hierarchy of the type categories in the [ABAP type system](javascript:call_link\('abentypes_objects_oview.htm'\)).

In addition, type description classes for complex types, references, classes, and interfaces have special methods for determining references to partial types. These methods can be used can navigate to all partial types using a composite type.

Type description objects can only be created using the methods of type description classes. To get a reference to a type description object of a type, the static methods of the class CL\_ABAP\_TYPEDESCR can be used or methods of the special type description classes can be called.

Hints

-   In the statement [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)), type description objects can be specified after the addition [HANDLE](javascript:call_link\('abapcreate_data_handle.htm'\)) to create data objects with dynamically created data types.
-   The RTTS type description classes use constants to refer to data types. The value of these constants corresponds to the single character IDs returned by statement [DESCRIBE FIELD](javascript:call_link\('abapdescribe_field.htm'\)). A mapping of the constants to these IDs is listed for the addition [TYPE](abapdescribe_field.htm#!ABAP_ADDITION_1@1@) of that statement.

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

Reading of the type properties of an elementary type from a type object generated with the method DESCRIBE\_BY\_DATA.

TYPES my\_type TYPE p LENGTH 16 DECIMALS 6.
DATA  my\_data TYPE my\_type.
FINAL(descr) = cl\_abap\_typedescr=>describe\_by\_data( my\_data ).
cl\_demo\_output=>display(
  |Typename: { descr->absolute\_name }\\n| &&
  |Kind:     { descr->type\_kind     }\\n| &&
  |Length:   { descr->length        }\\n| &&
  |Decimals: { descr->decimals      }\\n| ).

Example

Reading of the properties of the components of a structure. The reference to the type object is assigned using a downcast to a reference variable of type CL\_ABAP\_STRUCTDESCR.

cl\_demo\_output=>display( CAST cl\_abap\_structdescr(
  cl\_abap\_typedescr=>describe\_by\_name( 'SYST' ) )->components ).

Continue
![Example](exa.gif "Example") [Determining Data Types](javascript:call_link\('abenrtti_data_type_abexa.htm'\))
![Example](exa.gif "Example") [Determining Object Types](javascript:call_link\('abenrtti_object_type_abexa.htm'\))