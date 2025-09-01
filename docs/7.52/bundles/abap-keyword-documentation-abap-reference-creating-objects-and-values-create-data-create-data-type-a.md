# ABAP - Keyword Documentation / ABAP - Reference / Creating Objects and Values / CREATE DATA / CREATE DATA - TYPE abap_type

Included pages: 2


### abapcreate_data_built_in.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data.htm) → 

CREATE DATA - TYPE abap\_type

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data_shortref.htm)

Syntax

CREATE DATA dref *\[*[area\_handle](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data_area_handle.htm)*\]*
                 TYPE *{*abap\_type*|*(name)*}*
                      *\[*LENGTH len*\]* *\[*DECIMALS dec*\]*.

Effect

Creates a data object with an explicitly specified data type. For the data type, all [predefined data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredefined_data_type_glosry.htm "Glossary Entry") (apart from b and s) can be used that are more specific than the static type of dref or are identical to it. The name of the type can be specified as follows:

-   abap\_type
    

Specified directly and statically as abap\_type.

-   (name)
    

Specified as the content of a character-like data object name (not case-sensitive). The following can be specified for name:

-   Literal or constant
    If the data object name is specified as a character literal or as a constant, it can be evaluated statically and the specified type is identified as the used object.

-   Variable
    If the data object name is specified as a variable, it is specified only dynamically and the content is not evaluated statically.

When the statement is executed, name is not evaluated until runtime (in both cases).

In the ABAP types c, n, p, and x, the length of the data type dtype can be determined by specifying a numeric data object len after the addition LENGTH, which, when the statement is executed, contains a value within the [length range](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_complete.htm) defined for the type in question. If the addition LENGTH is not specified, the standard length from the table is used. For all other ABAP types, the length is determined by the value in the table and the addition LENGTH cannot be specified.

In the ABAP type p, the number of [decimal places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfractional_portion_glosry.htm "Glossary Entry") is determined by specifying a numeric data object dec after the addition DECIMALS. If DECIMALS is specified, the same applies as in the statement [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_simple.htm). If the addition DECIMALS is not specified, no decimal places are created. The decimal separator is ignored in operations with packed numbers if the [program attribute](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_attribute_glosry.htm "Glossary Entry") fixed point arithmetic is not set. If it is not set, the addition DECIMALS is applied only to dynpros and in the statement [WRITE *\[*TO*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to.htm). For all other ABAP types and if name is specified dynamically, the addition DECIMALS is not permitted.

Note

When a data type abap\_type is used, the [instance operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninstance_operator_glosry.htm "Glossary Entry") [NEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_new.htm) acts like the statement CREATE DATA dref TYPE abap\_type and can be used in [general expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). The content of name cannot be specified dynamically here.

Example

Creation of an anonymous data object of packed number type with length specification and decimals. As the static data type of the data reference variable is generic, data referencing is only possible by assignment to a field symbol.

DATA dref TYPE REF TO data.
CREATE DATA dref TYPE p LENGTH 8 DECIMALS 3.
ASSIGN dref->\* TO FIELD-SYMBOL(<fs>).
<fs> = 1 / 3.
cl\_demo\_output=>display( <fs> ).

Executable Example

[Creating Elementary Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_simple_data_abexa.htm)

Continue
![Example](exa.gif "Example") [Creating Elementary Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_simple_data_abexa.htm)


### abencreate_simple_data_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data.htm) →  [CREATE DATA - TYPE abap\_type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data_built_in.htm) → 

Creating Elementary Data Objects

The example demonstrates how elementary data objects are created.

Source Code

REPORT demo\_create\_simple\_data.
CLASS create\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS create\_data IMPORTING
                                VALUE(typ) TYPE c
                                VALUE(len) TYPE i
                                VALUE(dec) TYPE i
                              RETURNING
                                VALUE(dref) TYPE REF TO data
                              RAISING cx\_sy\_create\_data\_error.
ENDCLASS.
CLASS create\_demo IMPLEMENTATION.
  METHOD main.
    DATA dref TYPE REF TO data.
    FIELD-SYMBOLS <fs> TYPE any.
    DATA: type     LENGTH 10 TYPE c,
          length   TYPE i,
          decimals TYPE i.
    cl\_demo\_input=>add\_field( EXPORTING text  = \`Builtin ABAP Type\`
                              CHANGING  field = type ).
    cl\_demo\_input=>add\_field( EXPORTING text  = \`Length\`
                              CHANGING  field = length ).
    cl\_demo\_input=>request(   EXPORTING text  = \`Decimals\`
                              CHANGING  field = decimals ).
    TRY.
        IF to\_lower( type ) = 'p' AND decimals > 2 \* length - 1.
          "Would lead to undefined state for packed number
          RAISE EXCEPTION TYPE cx\_sy\_create\_data\_error.
        ENDIF.
        dref = create\_data( typ = type
                            len = length
                            dec = decimals ).
        ASSIGN dref->\* TO <fs>.
        DESCRIBE FIELD <fs> TYPE type
                            LENGTH length IN BYTE MODE
                            DECIMALS decimals.
        cl\_demo\_output=>display( |{ type } { length } { decimals }| ).
      CATCH cx\_sy\_create\_data\_error.
        cl\_demo\_output=>display( |Error creating { type } {
                                                   length } {
                                                   decimals }| ).
    ENDTRY.
  ENDMETHOD.
  METHOD create\_data.
    TRANSLATE typ TO LOWER CASE.
    CASE typ.
      WHEN 'd' OR 'decfloat16' OR 'decfloat34' OR 'f' OR 'i'
               OR 'string' OR 't' OR 'xstring'.
        CREATE DATA dref TYPE (typ).
      WHEN 'c' OR 'n' OR 'x'.
        CREATE DATA dref TYPE (typ) LENGTH len.
      WHEN 'p'.
        CREATE DATA dref TYPE p LENGTH len DECIMALS dec.
      WHEN OTHERS.
        RAISE EXCEPTION TYPE cx\_sy\_create\_data\_error.
    ENDCASE.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  create\_demo=>main( ).

Description

The method create\_data creates all elementary data objects that are possible using predefined ABAP types, depending on the input parameters passed.
