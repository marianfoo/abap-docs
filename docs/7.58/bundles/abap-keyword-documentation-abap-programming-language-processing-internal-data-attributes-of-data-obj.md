# ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Attributes of Data Objects / Runtime Type Services (RTTS)

Included pages: 3


### abenrtti.htm

---
title: "Runtime Type Services (RTTS)"
description: |
  The RTTS(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_services_glosry.htm 'Glossary Entry') are implemented using a hierarchy of type description classes(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_class_glosry.htm 'Glossary Entry') that co
version: "7.58"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrtti.htm"
abapFile: "abenrtti.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abenrtti"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Attributes of Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendescribe_field.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Runtime%20Type%20Services%20%28RTTS%29%2C%20ABENRTTI%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Runtime Type Services (RTTS)

The [RTTS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry") are implemented using a hierarchy of [type description classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_class_glosry.htm "Glossary Entry") that contain the methods for [Runtime Type Creation (RTTC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_creation_glosry.htm "Glossary Entry") and [Runtime Type Identification (RTTI)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry"). Using these system classes, it is possible to

-   determine type information of existing [instances](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninstance_glosry.htm "Glossary Entry") and [type names](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_names.htm) in the [ABAP type hierarchy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_hierarchy.htm) at runtime.
-   define new data types at runtime.

Concept   

The properties of the types are represented by the attributes of [type description objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_object_glosry.htm "Glossary Entry"). For each type there is exactly one type description object. The attributes of the type description object contain information about the properties of the type. For each type category (elementary type, table, class, and so on), there is a type description class with special attributes for the special type properties. The class hierarchy of the type description classes corresponds to the hierarchy of the type categories in the [ABAP type hierarchy](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_hierarchy.htm).

In addition, type description classes for complex types, references, classes, and interfaces have special methods for determining references to partial types. These methods can be used can navigate to all partial types using a composite type.

Type description objects can only be created using the methods of type description classes. To get a reference to a type description object of a type, the static methods of the class CL\_ABAP\_TYPEDESCR can be used or methods of the special type description classes can be called.

Hints

-   The RTTS type description classes use constants to refer to data types.
-   The value of these constants corresponds to the single character IDs returned by statement [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdescribe_field.htm). A mapping of the constants to these IDs is listed for the addition [TYPE](abapdescribe_field.htm#!ABAP_ADDITION_1@1@) of that statement.
-   In the statement [CREATE DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data.htm), type description objects can be specified after the addition [HANDLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_handle.htm) to create data objects with dynamically created data types.

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
![Example](exa.gif "Example") [Determining Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrtti_data_type_abexa.htm)
![Example](exa.gif "Example") [Determining Object Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrtti_object_type_abexa.htm)


### abenrtti_data_type_abexa.htm

---
title: "Determining Data Types"
description: |
  This example demonstrates how the properties of data types can be determined at runtime. Source Code  CCDEF CLASS conv_exc DEFINITION INHERITING FROM cx_static_check. ENDCLASS.  Public class definition CLASS cl_demo_rtti_data_types DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREA
version: "7.58"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrtti_data_type_abexa.htm"
abapFile: "abenrtti_data_type_abexa.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "types", "abenrtti", "type", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Attributes of Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendescribe_field.htm) →  [Runtime Type Services (RTTS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrtti.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Determining%20Data%20Types%2C%20ABENRTTI_DATA_TYPE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Determining Data Types

This example demonstrates how the properties of data types can be determined at runtime.

Source Code   

\* CCDEF
CLASS conv\_exc DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
\* Public class definition
CLASS cl\_demo\_rtti\_data\_types DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rtti\_data\_types IMPLEMENTATION.
  METHOD main.
    DATA: type1 TYPE c LENGTH 30 VALUE 'SCARR',
          type2 TYPE c LENGTH 30 VALUE 'SPFLI'.
    DATA: dref1 TYPE REF TO data,
          dref2 TYPE REF TO data.
    DATA: descr\_ref1 TYPE REF TO cl\_abap\_typedescr,
          descr\_ref2 TYPE REF TO cl\_abap\_typedescr.
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field = type1
     )->request(   CHANGING field = type2 ).
    TRY.
        CREATE DATA: dref1 TYPE (type1),
                     dref2 TYPE (type2).
      CATCH cx\_sy\_create\_data\_error.
        out->write( 'Create data error!' ).
        RETURN.
    ENDTRY.
    descr\_ref1 = cl\_abap\_typedescr=>describe\_by\_data( dref1->\* ).
    descr\_ref2 = cl\_abap\_typedescr=>describe\_by\_data( dref2->\* ).
    TRY.
        IF descr\_ref1 <> descr\_ref2.
          RAISE EXCEPTION TYPE conv\_exc.
        ELSE.
          dref2->\* = dref1->\*.
        ENDIF.
      CATCH conv\_exc.
        out->write(
          \`Assignment from type \`    &&
          descr\_ref2->absolute\_name  &&
          \` to \`                     &&
          descr\_ref1->absolute\_name  &&
          \` not allowed!\` ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

This example expands on the [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendescribe_field_abexa.htm) for DESCRIBE FIELD to the correct check of any data type.

When complex types, such as SCARR and SPFLI, are entered in the input fields, the RTTI determines the full [absolute type name](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabsolute_typename_glosry.htm "Glossary Entry").


### abenrtti_object_type_abexa.htm

---
title: "Determining Object Types"
description: |
  This example demonstrates how the dynamic types of objects can be determined at runtime. Source Code  CCDEF CLASS conv_exc DEFINITION INHERITING FROM cx_static_check. ENDCLASS. CLASS c1 DEFINITION. ENDCLASS. CLASS c2 DEFINITION. ENDCLASS.  Public class definition CLASS cl_demo_rtti_object
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrtti_object_type_abexa.htm"
abapFile: "abenrtti_object_type_abexa.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "types", "abenrtti", "object", "type", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Attributes of Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendescribe_field.htm) →  [Runtime Type Services (RTTS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrtti.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Determining%20Object%20Types%2C%20ABENRTTI_OBJECT_TYPE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Determining Object Types

This example demonstrates how the dynamic types of objects can be determined at runtime.

Source Code   

\* CCDEF
CLASS conv\_exc DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS c1 DEFINITION.
ENDCLASS.
CLASS c2 DEFINITION.
ENDCLASS.
\* Public class definition
CLASS cl\_demo\_rtti\_object\_types DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rtti\_object\_types IMPLEMENTATION.
  METHOD main.
    DATA: otype1 TYPE c LENGTH 30 VALUE 'C1',
          otype2 TYPE c LENGTH 30 VALUE 'C2'.
    DATA: oref1 TYPE REF TO object,
          oref2 TYPE REF TO object.
    DATA: descr\_ref1 TYPE REF TO cl\_abap\_typedescr,
          descr\_ref2 TYPE REF TO cl\_abap\_typedescr.
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field = otype1
     )->request(   CHANGING field = otype2 ).
    TRY.
        otype1 = cl\_abap\_dyn\_prg=>check\_whitelist\_str(
          EXPORTING
            val                      = otype1
            whitelist                =  \`C1,C2\` ).
        otype2 = cl\_abap\_dyn\_prg=>check\_whitelist\_str(
          EXPORTING
            val                      = otype2
            whitelist                =  \`C1,C2\` ).
      CATCH cx\_abap\_not\_in\_whitelist.
        out->write( 'Input not allowed' ).
        RETURN.
    ENDTRY.
    TRY.
        CREATE OBJECT: oref1 TYPE (otype1),
                       oref2 TYPE (otype2).
      CATCH cx\_sy\_create\_object\_error.
        out->write( 'Create object error!' ).
        RETURN.
      CATCH cx\_root.
        out->write( 'Other error!' ).
        RETURN.
    ENDTRY.
    descr\_ref1 = cl\_abap\_typedescr=>describe\_by\_object\_ref( oref1 ).
    descr\_ref2 = cl\_abap\_typedescr=>describe\_by\_object\_ref( oref2 ).
    TRY.
        IF descr\_ref1 <> descr\_ref2.
          RAISE EXCEPTION TYPE conv\_exc.
        ELSE.
          oref1 = oref2.
        ENDIF.
      CATCH conv\_exc.
        out->write(
          \`Assignment from type \`   && |\\n| &&
          descr\_ref2->absolute\_name && |\\n| &&
          \`to \`                     && |\\n| &&
          descr\_ref1->absolute\_name && |\\n| &&
          \`not allowed!\` ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

This example is the equivalent of the [executable example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrtti_data_type_abexa.htm) for data types for object types. Here, the dynamic type of reference variables is determined, namely the [absolute type name](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabsolute_typename_glosry.htm "Glossary Entry") of the class of the referenced object.
