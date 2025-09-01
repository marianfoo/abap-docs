  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) →  [CREATE DATA, REF TO](javascript:call_link\('abapcreate_data_reference.htm'\)) → 

Creating Reference Variables

This example demonstrates how reference variables are created.

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

Creates an interface reference variable dynamically. The [absolute type name](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry") is used for the description of the local program interface.

The reference variable is assigned to a field symbol <ref> using dereferencing. According to the [general typing rules](javascript:call_link\('abentyping_check_general.htm'\)), this field symbol an only be typed completely generically or typed with reference to the interface intf.

The dynamically created reference variable is used to create and address an object of a class. Since this field symbol is completely generic, only the variant of the [dynamic ASSIGN](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)) shown here and not a special [dynamic access](javascript:call_link\('abapassign_mem_area_dynamic_access.htm'\)) can be used to access the interface attribute.