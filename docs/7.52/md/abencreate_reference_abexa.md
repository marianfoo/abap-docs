  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) →  [CREATE DATA - REF TO](javascript:call_link\('abapcreate_data_reference.htm'\)) → 

Creating Reference Variables

This example demonstrates how to create a reference variable.

Source Code

REPORT demo\_create\_reference.
INTERFACE intf.
  CONSTANTS attr TYPE string VALUE \`Interface constant\`.
ENDINTERFACE.
CLASS cls DEFINITION.
  PUBLIC SECTION.
    INTERFACES intf.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA intf\_name TYPE string.
    DATA cls\_name  TYPE string.
    DATA dref TYPE REF TO data.
    FIELD-SYMBOLS <ref>  TYPE any.
    FIELD-SYMBOLS <attr> TYPE any.
    intf\_name = '\\PROGRAM=DEMO\_CREATE\_REFERENCE\\INTERFACE=INTF'.
    CREATE DATA dref TYPE REF TO (intf\_name).
    ASSIGN dref->\* TO <ref>.
    cls\_name = '\\PROGRAM=DEMO\_CREATE\_REFERENCE\\CLASS=CLS'.
    CREATE OBJECT <ref> TYPE (cls\_name).
    ASSIGN ('<REF>->ATTR') TO <attr>.
    cl\_demo\_output=>display\_data( <attr> ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Dynamic generation of an interface reference variable. The [absolute type name](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry") is used for the name of the local interface.

The reference variable is assigned to a field symbol <ref> by means of dereferencing. According to the [general typing rules](javascript:call_link\('abentyping_check_general.htm'\)), the field symbol must either be typed completely generically or typed with reference to the interface intf.

The dynamically generated reference variable is used to create and address an object of a class. As this field symbol is completely generic, only the display variant of the [dynamic ASSIGN](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)) (and not a special [Dynamic Access](javascript:call_link\('abapassign_mem_area_dynamic_access.htm'\))) can be used to access the interface attribute.