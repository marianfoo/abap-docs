  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data.htm) →  [CREATE DATA, REF TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_reference.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Creating%20Reference%20Variables%2C%20ABENCREATE_REFERENCE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Creating Reference Variables

This example demonstrates how reference variables are created.

Source Code   

\* CCDEF
INTERFACE intf.
  CONSTANTS attr TYPE string VALUE \`Interface constant\`.
ENDINTERFACE.
CLASS cls DEFINITION.
  PUBLIC SECTION.
    INTERFACES intf.
ENDCLASS.
\* Public class definition
CLASS cl\_demo\_create\_reference DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_create\_reference IMPLEMENTATION.
  METHOD main.
    DATA intf\_name TYPE string.
    DATA cls\_name  TYPE string.
    DATA dref TYPE REF TO data.
    FIELD-SYMBOLS <ref>  TYPE any.
    intf\_name = '\\CLASS=CL\_DEMO\_CREATE\_REFERENCE\\INTERFACE=INTF'.
    CREATE DATA dref TYPE REF TO (intf\_name).
    ASSIGN dref->\* TO <ref>.
    cls\_name = '\\CLASS=CL\_DEMO\_CREATE\_REFERENCE\\CLASS=CLS'.
    CREATE OBJECT <ref> TYPE (cls\_name).
    out->write\_data( <ref>->('attr') ).
  ENDMETHOD.
ENDCLASS.

Description   

Creates an interface reference variable dynamically. The [absolute type name](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabsolute_typename_glosry.htm "Glossary Entry") is used for the description of the local interface.

The reference variable is assigned to a field symbol <ref> using dereferencing. According to the [general typing rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check_general.htm), this field symbol an only be typed completely generically or typed with reference to the interface intf.

The dynamically created reference variable is used to create and address an object of a class.