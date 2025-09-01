# ABAP Keyword Documentation / ABAP − Reference / Processing Internal Data / Attributes of Data Objects / RTTS - Runtime Type Services

Included pages: 3



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenrtti.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrtti.htm)
- [abenrtti_data_type_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrtti_data_type_abexa.htm)
- [abenrtti_object_type_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrtti_object_type_abexa.htm)

**Bundle Contains**: 3 documentation pages
**Version**: ABAP 7.54
**Generated**: 2025-09-01T11:25:45.966Z

---

### abenrtti.htm

> **📖 Official SAP Documentation**: [abenrtti.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrtti.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Attributes of Data Objects](javascript:call_link\('abendescribe_field.htm'\)) → 

RTTS - Runtime Type Services

The [RTTS](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry") are implemented using a hierarchy of [type description classes](javascript:call_link\('abentype_class_glosry.htm'\) "Glossary Entry") that contain the methods for [Runtime Type Creation (RTTC)](javascript:call_link\('abenrun_time_type_creation_glosry.htm'\) "Glossary Entry") and [Runtime Type Identification (RTTI)](javascript:call_link\('abenrun_time_type_identific_glosry.htm'\) "Glossary Entry"). Using these system classes it is possible to

-   determine type information of existing [instances](javascript:call_link\('abeninstance_glosry.htm'\) "Glossary Entry") and [type names](javascript:call_link\('abentype_names.htm'\)) in the [ABAP type system](javascript:call_link\('abentypes_objects_oview.htm'\)) at runtime.

-   define new data types at runtime.

Concept

The properties of the types are represented by the attributes of [type description objects](javascript:call_link\('abentype_object_glosry.htm'\) "Glossary Entry"). For each type there is exactly one type description object. The attributes of the type description object contain information about the properties of the type. For each category of type (elementary type, table, class, and so on), there is a type description class with special attributes for the special type properties. The class hierarchy of the type description classes corresponds to the hierarchy of the type categories in the [ABAP type system](javascript:call_link\('abentypes_objects_oview.htm'\)).

In addition, type description classes for complex types, references, classes, and interfaces have special methods for specifying references to partial types. These methods can be used can navigate to all partial types using a composite type.

Type description objects can only be created using the methods of type description classes. To get a reference to a type description object of a type, the static methods of the class CL\_ABAP\_TYPEDESCR can be used or call methods of the special type description classes.

Note

In the statement [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)), type description objects can be specified after the addition [HANDLE](javascript:call_link\('abapcreate_data_handle.htm'\)) to create data objects with dynamically created data types.

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
![Example](exa.gif "Example") [Determining Data Types](javascript:call_link\('abenrtti_data_type_abexa.htm'\))
![Example](exa.gif "Example") [Determining Object Types](javascript:call_link\('abenrtti_object_type_abexa.htm'\))



**📖 Source**: [abenrtti.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrtti.htm)

### abenrtti_data_type_abexa.htm

> **📖 Official SAP Documentation**: [abenrtti_data_type_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrtti_data_type_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Attributes of Data Objects](javascript:call_link\('abendescribe_field.htm'\)) →  [RTTS - Runtime Type Services](javascript:call_link\('abenrtti.htm'\)) → 

Determining Data Types

This example demonstrates how the attributes of data types can be determined at runtime.

Source Code

REPORT demo\_rtti\_data\_types.
CLASS conv\_exc DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: type1 TYPE c LENGTH 30 VALUE 'SCARR',
          type2 TYPE c LENGTH 30 VALUE 'SPFLI'.
    DATA: dref1 TYPE REF TO data,
          dref2 TYPE REF TO data.
    FIELD-SYMBOLS: <data1> TYPE any,
                   <data2> TYPE any.
    DATA: descr\_ref1 TYPE REF TO cl\_abap\_typedescr,
          descr\_ref2 TYPE REF TO cl\_abap\_typedescr.
    cl\_demo\_input=>add\_field( CHANGING field = type1 ).
    cl\_demo\_input=>request(   CHANGING field = type2 ).
    TRY.
        CREATE DATA: dref1 TYPE (type1),
                     dref2 TYPE (type2).
        ASSIGN: dref1->\* TO <data1>,
                dref2->\* TO <data2>.
      CATCH cx\_sy\_create\_data\_error.
        cl\_demo\_output=>display( 'Create data error!' ).
        LEAVE PROGRAM.
    ENDTRY.
    descr\_ref1 = cl\_abap\_typedescr=>describe\_by\_data( <data1> ).
    descr\_ref2 = cl\_abap\_typedescr=>describe\_by\_data( <data2> ).
    TRY.
        IF descr\_ref1 <> descr\_ref2.
          RAISE EXCEPTION TYPE conv\_exc.
        ELSE.
          <data2> = <data1>.
        ENDIF.
      CATCH conv\_exc.
        cl\_demo\_output=>display(
          \`Assignment from type \`    &&
          descr\_ref2->absolute\_name  &&
          \` to \`                     &&
          descr\_ref1->absolute\_name  &&
          \` not allowed!\` ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example expands on the [executable example](javascript:call_link\('abendescribe_field_abexa.htm'\)) for DESCRIBE FIELD, where the correct way to check any data type is described.

When complex types, such as SCARR and SPFLI, are entered in the input fields, the RTTI determines the full [absolute type name](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry").



**📖 Source**: [abenrtti_data_type_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrtti_data_type_abexa.htm)

### abenrtti_object_type_abexa.htm

> **📖 Official SAP Documentation**: [abenrtti_object_type_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrtti_object_type_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenrtti_object_type_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrtti_object_type_abexa.htm)


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Attributes of Data Objects](javascript:call_link\('abendescribe_field.htm'\)) →  [RTTS - Runtime Type Services](javascript:call_link\('abenrtti.htm'\)) → 

Determining Object Types

This example demonstrates how the dynamic types of objects can be determined at runtime.

Source Code

REPORT demo\_rtti\_object\_types.
CLASS conv\_exc DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS c1 DEFINITION.
ENDCLASS.
CLASS c2 DEFINITION.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: otype1 TYPE c LENGTH 30 VALUE 'C1',
          otype2 TYPE c LENGTH 30 VALUE 'C2'.
    DATA: oref1 TYPE REF TO object,
          oref2 TYPE REF TO object.
    DATA: descr\_ref1 TYPE REF TO cl\_abap\_typedescr,
          descr\_ref2 TYPE REF TO cl\_abap\_typedescr.
    cl\_demo\_input=>add\_field( CHANGING field = otype1 ).
    cl\_demo\_input=>request(   CHANGING field = otype2 ).
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
        cl\_demo\_output=>display( 'Input not allowed' ).
        LEAVE PROGRAM.
    ENDTRY.
    TRY.
        CREATE OBJECT: oref1 TYPE (otype1),
                       oref2 TYPE (otype2).
      CATCH cx\_sy\_create\_object\_error.
        cl\_demo\_output=>display( 'Create object error!' ).
        LEAVE PROGRAM.
      CATCH cx\_root.
        cl\_demo\_output=>display( 'Other error!' ).
        LEAVE PROGRAM.
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
        cl\_demo\_output=>display(
          \`Assignment from type \`   && |\\n| &&
          descr\_ref2->absolute\_name && |\\n| &&
          \`to \`                     && |\\n| &&
          descr\_ref1->absolute\_name && |\\n| &&
          \`not allowed!\` ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example is the object type counterpart of the [executable example](javascript:call_link\('abenrtti_data_type_abexa.htm'\)) for data types. Here, the dynamic type of reference variables is determined, namely the [absolute type name](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry") of the class of the referenced object.
