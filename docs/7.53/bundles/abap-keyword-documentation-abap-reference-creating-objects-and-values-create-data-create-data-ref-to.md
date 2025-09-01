# ABAP Keyword Documentation / ABAP − Reference / Creating Objects and Values / CREATE DATA / CREATE DATA - REF TO

Included pages: 2


### abapcreate_data_reference.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) → 

CREATE DATA - REF TO

[Quick Reference](javascript:call_link\('abapcreate_data_shortref.htm'\))

Syntax

CREATE DATA dref *\[*[area\_handle](javascript:call_link\('abapcreate_data_area_handle.htm'\))*\]*
                 TYPE REF TO *{*type*|*(name)*}*.

Effect

The addition TYPE REF TO is used by the statement CREATE DATA to create a reference variable. The static type of the reference variable can be specified either directly as type or dynamically in name.

When type is specified, the same rules apply as to the definition of reference types using the statement [TYPES](javascript:call_link\('abaptypes.htm'\)). For data reference variables, either the generic type data or a fully specified data type can be specified. For object reference variables, either a class or an interface can be specified.

For name, a character-like field can be specified that has to contain the name of a class, an interface, or a data type when the statement is executed. The name of the reference type in name can also be specified as an [absolute type name](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry").

Note

Object types in name can also be specified dynamically in lowercase letters.

Example

Creation of an anonymous data object as reference variable of the static type of a class. The dereferenced reference variable can be used to create an object of the class and for access to its components.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    DATA attr TYPE string VALUE \`Oh my ...\`.
ENDCLASS.
TYPES reftype TYPE REF TO cls.
DATA dref TYPE REF TO reftype.
CREATE DATA dref TYPE REF TO cls.
CREATE OBJECT dref->\*.
cl\_demo\_output=>display( dref->\*->attr ).

Executable Example

[Creating Reference Variables](javascript:call_link\('abencreate_reference_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Creating Reference Variables](javascript:call_link\('abencreate_reference_abexa.htm'\))


### abencreate_reference_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) →  [CREATE DATA - REF TO](javascript:call_link\('abapcreate_data_reference.htm'\)) → 

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

Creates an interface reference variable dynamically. The [absolute type name](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry") is used for the name of the local interface.

The reference variable is assigned to a field symbol <ref> using dereferencing. According to the [general typing rules](javascript:call_link\('abentyping_check_general.htm'\)), the field symbol must either be typed in full generically or typed with reference to the interface intf.

The dynamically created reference variable is used to create and address an object of a class. Since this field symbol is fully generic, only the display variant of the [dynamic ASSIGN](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)) (and not a special [dynamic access](javascript:call_link\('abapassign_mem_area_dynamic_access.htm'\))) can be used to access the interface attribute.
