# ABAP - Keyword Documentation / ABAP - Reference / Processing Internal Data / Assignments / Assigning References / Setting Field Symbols / ASSIGN / ASSIGN - casting_spec

Included pages: 6


### abapassign_casting.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_assignments.htm) →  [Setting Field Symbols](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm) → 

ASSIGN - casting\_spec

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_shortref.htm)

Syntax

... { }
  *|* *{* CASTING *{* *{* *}*
              *|* *{*TYPE type*|*(name)*}*
              *|* *{*LIKE dobj*}*
              *|* *{**\[*TYPE p*\]* DECIMALS dec*}*
              *|* *{*TYPE HANDLE handle*}* *}* *}*
  *|* *{* [obsolete\_casting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_casting_obsolete.htm) *}* ...

Alternatives:

[1\. ... *{* *}*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... CASTING ...](#!ABAP_ALTERNATIVE_2@2@)

Effect

If specified, casting\_spec defines the data type used to handled the memory area [mem\_area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area.htm) assigned to the field symbol when a statement is given the field symbol in an operand position. Either the addition CASTING can be specified or nothing at all. Outside of classes, the obsolete variants [obsolete\_casting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_casting_obsolete.htm) are also possible.

The following restrictions apply:

-   In assignments of [table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area_writable_exp.htm), the first alternative can be used without further additions.
    
-   The CASTING addition cannot be used for [enumerated types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_type_glosry.htm "Glossary Entry"). This means that the assigned memory area must not be an [enumerated object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_object_glosry.htm "Glossary Entry") and the specified data type must not be an enumeration type.
    

Alternative 1

... *{* *}*

Effect

If nothing is specified for casting\_spec, the field symbol is given the data type of the data object used in [mem\_area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area.htm) and the assigned memory area is handled accordingly. This data type must [match](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_check_general.htm) the [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_glosry.htm "Glossary Entry") of the field symbol.

Example

After the first assignment the field symbol has type c of length 3 and after the second assignment the field symbol has type string. Statement [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdescribe_field.htm) returns the corresponding values C 3 and g.

FIELD-SYMBOLS <fs> TYPE csequence.
ASSIGN 'xxx' TO <fs> .
DESCRIBE FIELD <fs> TYPE DATA(type)
                    LENGTH DATA(length) IN CHARACTER MODE.
cl\_demo\_output=>write( type ).
ASSIGN \`xxx\` TO <fs> .
DESCRIBE FIELD <fs> TYPE type.
cl\_demo\_output=>display( type ).

Alternative 2

... CASTING ...

Extras:

[1\. ... *{* *}*](#!ABAP_ADDITION_1@1@)
[2\. ... TYPE type*|*(name)](#!ABAP_ADDITION_2@2@)
[3\. ... LIKE dobj](#!ABAP_ADDITION_3@3@)
[4\. ... *\[*TYPE p*\]* DECIMALS dec](#!ABAP_ADDITION_4@4@)
[5\. ... TYPE HANDLE handle](#!ABAP_ADDITION_5@5@)

Effect

If the addition CASTING is used in casting\_spec, the memory area is handled as if it had the type specified by CASTING. If CASTING is specified, the field symbol must not be typed with the obsolete addition STRUCTURE of the statement [FIELD SYMBOLS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfield-symbols.htm). .

Casting can either take place implicitly using the typing of the field symbol or explicitly using one of the additions TYPE, LIKE, or DECIMALS. In explicit castings, the field symbol cannot be specified in full; instead it must be specified generically.

Notes

-   If the data type determined by CASTING is [deep](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeep_glosry.htm "Glossary Entry") or if deep data objects are stored in the assigned memory area, the deep components must appear with exactly the same type and position in the assigned memory area. In particular, this means that individual [reference variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_variable_glosry.htm "Glossary Entry") can be assigned to only one field symbol that is typed as a reference variable by the same [static type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_type_glosry.htm "Glossary Entry").
    
-   The static check of the statement ASSIGN using the addition CASTING is done is such a way that all errors are identified, regardless of the system or platform on which the check is run. A runtime check only checks the data against the current system or the current platform. These checks likewise always take place if the field symbol <fs> is typed with the obsolete addition STRUCTURE of the statement FIELD SYMBOLS..
    
-   If the addition CASTING is used, the result of the statement ASSIGN may be platform-dependent. The internal [byte order](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbyteorder.htm) of characters can, for example, be platform-dependent, which becomes obvious during a cast to a byte-like data type.
    
-   The memory area [mem\_area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area.htm) must meet the [alignment requirements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenalignment.htm) of the data type specified by the casting. When flat elementary data types are specified, for example, the memory address mem\_area must be divisible as follows:
    

-   Divisible by 2 for the character-like data types c and n and the date/time types d and t.

-   By 4 for the numeric data type i.

-   By 8 for the numeric data types int8, f, and decfloat16.

-   By 16 for the numeric data type decfloat34.
    

Addition 1

... *{* *}*

Effect

If the addition CASTING is specified without any further additions, the assigned memory area is cast to the type of the field symbol. The field symbol must be either fully typed, or typed with one of the generic built-in ABAP types c, n, p, or x.

Example

Casting of an integer 333 as a byte field. Depending on the [byte order](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbyte_order_glosry.htm "Glossary Entry"), the output is either 4D01 or 014D.

TYPES hex4 TYPE x LENGTH 2.
FIELD-SYMBOLS <fs> TYPE hex4.
ASSIGN 333 TO <fs> CASTING.
cl\_demo\_output=>display( <fs> ).

Addition 2

... TYPE type*|*(name)

Effect

Specifies a data types after TYPE explicitly. The name of the type can be specified as follows:

-   type
    

Specified directly and statically as type.

-   (name)
    

Specified as the content of a character-like data object name that contains the name of a data type (in uppercase) when the statement is executed. The following can be specified for name:

-   Literal or constants
    If the data object name is specified as a character literal or as a constant, it can be evaluated statically and the specified type is identified as the used object.

-   Variable
    If the data object name is specified as a variable, it is specified only dynamically and the content is not evaluated statically.

When the statement is executed, name is not evaluated until runtime (in both cases).

The assigned memory area is cast to the specified type. The data type specified after TYPE cannot be generic. The exceptions to this rule are the built-in ABAP types c, n, p, and x. However, [table categories](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_tabkind.htm) cannot be specified, nor REF TO.

The field symbol <fs> can only be typed generically and not in full. The specified data type has to [match](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_check.htm) the generic [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_glosry.htm "Glossary Entry") of the field symbol, meaning that [casting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencast_casting_glosry.htm "Glossary Entry")s are allowed to specialize the generic typing but not to make more general.

If a generic character-like type c or n is specified after TYPE, the length of the assigned memory area must be a multiple of the length of a character in the memory when the statement is executed.

Example

Casting of a time field to a structured type with three components.

TYPES:
  BEGIN OF time,
    hours   TYPE c LENGTH 2,
    minute  TYPE c LENGTH 2,
    seconds TYPE c LENGTH 2,
  END OF time.
FIELD-SYMBOLS <fs> TYPE any.
ASSIGN sy-timlo TO <fs> CASTING TYPE time.
cl\_demo\_output=>display( <fs> ).

Example

In the following example, one of the two ASSIGN statements produces a runtime error, since the alignment requirement for the type c is not met. Which of the statements produces the runtime error is not generally defined and depends on the preceding declarations.

DATA hex        TYPE x LENGTH 10.
FIELD-SYMBOLS <fs> TYPE any.
ASSIGN hex+0(4) TO <fs> CASTING type c.
ASSIGN hex+1(4) TO <fs> CASTING type c.

Addition 3

... LIKE dobj

Effect

The following can be specified after LIKE:

-   A data object dobj based on the rules for [TYPES ... LIKE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_referring.htm). The assigned memory area is cast to the data type of the data object.
    
-   A generically typed field symbol.
    

-   If a memory area is assigned to the field symbol, the data type used to handle the memory area is the object of the cast.

-   If no memory area is assigned to the field symbol, a [standard type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_type_glosry.htm "Glossary Entry") produced by the following rules is used:
    any, c, clike, csequence, data, and simple produce c with length 1.
    decfloat produces decfloat34.
    n produces n with length 1.
    numeric and p produce p with length 8 and no decimal places.
    x and xsequence produce x of the length 1.
    Generic table types raise an exception of the class
    CX\_SY\_ASSIGN\_CAST\_ILLEGAL\_CAST.

-   A generically typed formal parameter.
    

-   If an actual parameter is assigned to the formal parameter, the data type of this parameter is the object of the cast.

-   If no actual parameter is assigned to an optional formal parameter, its [assigned](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_generic.htm) [standard type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_type_glosry.htm "Glossary Entry") is used.

The field symbol <fs> can only be typed generically and not in full. The specified data type has to [match](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_check.htm) the generic [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_glosry.htm "Glossary Entry") of the field symbol, meaning that [casting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencast_casting_glosry.htm "Glossary Entry")s are allowed to specialize the generic typing but not to make more general.

Notes

-   LIKE can be used to refer to the data objects in its own program, and also to the public attributes of global classes.
    
-   The standard type for generically typed field symbols specified after CASTING LIKE displays some differences to the [standard type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_generic.htm) for generic field symbols and formal parameters (length 1 not 4 if any and data are used and no standard type for generic table types).
    
-   If a generically typed field symbol is specified after CASTING LIKE, a memory area should be assigned to it when the statement is executed.
    

Example

Casting of a structure with three components to a time field.

DATA:
  BEGIN OF time,
    hours   TYPE c LENGTH 2 VALUE '11',
    minute  TYPE c LENGTH 2 VALUE '55',
    seconds TYPE c LENGTH 2 VALUE '00',
  END OF time.
FIELD-SYMBOLS <fs> TYPE any.
ASSIGN time TO <fs> CASTING LIKE sy-timlo.
cl\_demo\_output=>display( <fs> ).

Addition 4

... *\[*TYPE p*\]* DECIMALS dec

Effect

A numeric data object dec must be specified after DECIMALS. The assigned memory area is cast to the data type p, where the number of [decimal places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfractional_portion_glosry.htm "Glossary Entry") is determined by the content of dec. The number of decimal places must not exceed the total number of [places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenplace_glosry.htm "Glossary Entry"). TYPE does not need to be specified for DECIMALS. If TYPE is used, only the data type p (which is used anyway) can be specified.

The field symbol <fs> can only be typed generically and not in full. The specified data type has to [match](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_check.htm) the generic [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_glosry.htm "Glossary Entry") of the field symbol, meaning that [casting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencast_casting_glosry.htm "Glossary Entry")s are allowed to specialize the generic typing but not to make more general.

Example

Calculating the quotient from the packed number pack and the field symbol <pack> demonstrates the effect of casting with the addition DECIMALS. Factors between 10 and 100,000,000 are determined. When using <pack> in operand positions, a different value is used than when using pack.

DATA output TYPE TABLE OF string WITH EMPTY KEY.
DATA pack   TYPE p LENGTH 8 DECIMALS 0 VALUE '12345678'.
FIELD-SYMBOLS <pack> TYPE p.
DO 8 TIMES.
  ASSIGN pack TO <pack> CASTING DECIMALS sy-index.
  APPEND CONV string( pack / <pack> ) TO output.
ENDDO.
cl\_demo\_output=>display( output ).

Addition 5

... TYPE HANDLE handle

Effect

After TYPE HANDLE, a reference variable handle of the static type of the CL\_ABAP\_DATADESCR class or its subclasses is specified and it points to a [type description object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_object_glosry.htm "Glossary Entry") of the [RTTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrtts_glosry.htm "Glossary Entry"). The assigned memory area is cast to the type described by the type description object.

The field symbol <fs> can only be typed generically and not in full. The specified data type has to [match](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_check.htm) the generic [typing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_glosry.htm "Glossary Entry") of the field symbol, meaning that [casting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencast_casting_glosry.htm "Glossary Entry")s are allowed to specialize the generic typing but not to make more general.

The addition CASTING TYPE HANDLE cannot be used with the addition [RANGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_range.htm).

Note

The type description object may have been created using the RTTS methods on existing data objects, or using the definition of a new data type.

Example

Create a type description object for a structure and use it to cast a date field.

DATA(struct) = cl\_abap\_structdescr=>create(
  VALUE abap\_component\_tab(
    ( name = 'YEAR'  type = cl\_abap\_elemdescr=>get\_c( p\_length = 4 ) )
    ( name = 'MONTH' type = cl\_abap\_elemdescr=>get\_c( p\_length = 2 ) )
    ( name = 'DAY'   type = cl\_abap\_elemdescr=>get\_c( p\_length = 2 ) )
  ) ).
FIELD-SYMBOLS <fs> TYPE any.
ASSIGN sy-datlo TO  <fs> CASTING TYPE HANDLE struct.
cl\_demo\_output=>display( <fs> ).

Continue
[Casting Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencasting_obsolete_abexas.htm)


### abencasting_obsolete_abexas.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_assignments.htm) →  [Setting Field Symbols](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm) →  [ASSIGN - casting\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_casting.htm) → 

Casting Examples

Continue
![Example](exa.gif "Example") [Field Symbols - Casting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencasting_imp_exp_abexa.htm)
![Example](exa.gif "Example") [Field Symbols, Casting Predefined Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencasting_obsolete_type_abexa.htm)
![Example](exa.gif "Example") [Field Symbols, Casting Decimal Places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencasting_obsolete_dec_abexa.htm)


### abencasting_imp_exp_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_assignments.htm) →  [Setting Field Symbols](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm) →  [ASSIGN - casting\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_casting.htm) →  [Casting Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencasting_obsolete_abexas.htm) → 

Field Symbols - Casting

This example demonstrates how casting with implicit and explicit type specification is carried out.

Source Code

REPORT demo\_field\_symbols\_casting.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF t\_date,
              year  TYPE n LENGTH 4,
              month TYPE n LENGTH 2,
              day   TYPE n LENGTH 2,
           END OF t\_date.
    FIELD-SYMBOLS: <fs1> TYPE t\_date,
                   <fs2> TYPE any,
                   <fs3> TYPE n.
    DATA(out) = cl\_demo\_output=>new(
      )->write\_text( |sy-datum: { sy-datum }|
      )->line( ).
\*------- Casting with implicit typing ------------
    ASSIGN sy-datum TO <fs1> CASTING.
    out->write\_text( |Year: { <fs1>-year }| ).
    out->write\_text( |Month: { <fs1>-month }| ).
    out->write\_text( |Day: { <fs1>-day }| ).
    out->line( ).
\*------- Casting with explicit typing ------------
    ASSIGN sy-datum TO <fs2> CASTING TYPE t\_date.
    DO.
      ASSIGN COMPONENT sy-index OF STRUCTURE <fs2> TO <fs3>.
      IF sy-subrc <> 0.
        EXIT.
      ENDIF.
      out->write\_text( |Component { sy-index }: { <fs3> }| ).
    ENDDO.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In the first part of the main method, an implicit casting is carried out. The field symbol <fs1> is completely typed with the local program type t\_date. Using the CASTING addition of the ASSIGN statement, the field sy-datum can be treated as a structure. Without the CASTING addition assigning would not be possible, because sy-datum is not compatible with the type of the field symbol.

In the second part of the main method, an implicit casting is carried out. The field symbol <fs2> is completely generic. Using the CASTING addition of the ASSIGN statement, a cast is carried out for the field sy-datum of the local program type t\_date. The field symbol <fs2> can now be treated like a structure but does not recognize components. For this reason, it must be assigned component by component to a further field symbol <fs3>.


### abencasting_obsolete_type_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_assignments.htm) →  [Setting Field Symbols](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm) →  [ASSIGN - casting\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_casting.htm) →  [Casting Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencasting_obsolete_abexas.htm) → 

Field Symbols, Casting Predefined Data Types

This example demonstrates how a casting is performed on predefined data types.

Source Code

REPORT demo\_field\_symbols\_assign\_type.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA txt(8) TYPE c VALUE '20050606'.
    DATA mytype(1) VALUE 'X'.
    FIELD-SYMBOLS <fs> TYPE ANY.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'Cast with built-in types' ).
    ASSIGN txt TO <fs>.
    out->write( |<fs> with inherited type c: { <fs> }| ).
\* correct -------------------------------------------------------------
    ASSIGN txt TO <fs> CASTING TYPE i.
    out->write( |<fs> casted with i: { <fs> }| ).
    ASSIGN txt TO <fs> CASTING TYPE (mytype).
    out->write( |<fs> casted with x: { <fs> }| ).
    out->display( ).
\* obsolete, not allowed in methods ------------------------------------
    "ASSIGN txt TO <fs> TYPE 'D'.
    "ASSIGN txt TO <fs> TYPE mytype.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example demonstrates how casting works on predefined data types. First the character string txt is assigned to the field symbol <fs> without casting. Afterwards, txt is assigned to <fs> using casting on types i and x. The value of the second task depends on the byte sequence of the current platform. The paired numbers in the last output row represent the hexadecimal code for the character in txt and depend on the character display of the current application server.

The section of the method that has been commented out also shows the syntax for the relevant [obsolete casting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_casting_obsolete.htm).


### abencasting_obsolete_dec_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_assignments.htm) →  [Setting Field Symbols](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm) →  [ASSIGN - casting\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_casting.htm) →  [Casting Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencasting_obsolete_abexas.htm) → 

Field Symbols, Casting Decimal Places

This example demonstrates how a casting of decimal places is carried out.

Source Code

REPORT demo\_field\_symbols\_assign\_deci.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: pack1 TYPE p DECIMALS 2 VALUE '400',
          pack2 TYPE p DECIMALS 2,
          pack3 TYPE p DECIMALS 2.
    FIELD-SYMBOLS: <f1> TYPE ANY ,
                   <f2> TYPE ANY.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'Cast of decimal places' ).
    out->write\_data( pack1 ).
\* correct --------------------------------------------------------------
    ASSIGN pack1 TO <f1> CASTING TYPE p DECIMALS 1.
    out->write( |<f1>: { <f1> }| ).
    pack2 = <f1>.
    out->write( |pack2: { pack2 }| ).
    ASSIGN pack2 TO <f2> CASTING TYPE p DECIMALS 4.
    out->write( |<f2>: { <f2> }| ).
    pack3 = <f1> + <f2>.
    out->write( |pack3: { pack3 }| ).
    <f2> = '1234.56789'.
    out->write( |<f2>: { <f2> }| ).
    out->write( |pack2: { pack2 }| ).
    out->display( ).
\* obsolete, not allowed in methods -------------------------------------
    "ASSIGN pack1 TO <f1> DECIMALS 1.
    "pack2 = <f1>.
    "ASSIGN pack2 TO <f2> DECIMALS 4.
    "pack3 = <f1> + <f2>.
    "<f2> = '1234.56789'.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The three fields of type p all have two decimal places. The field symbols <f1> and <f2> are given one or four decimal places. The numeric values are different for the field symbols and the fields assigned to them.

The section of the method that has been commented out also shows the syntax for the relevant [obsolete casting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_casting_obsolete.htm).


### abencasting_obsolete_abexas.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_assignments.htm) →  [Setting Field Symbols](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm) →  [ASSIGN - casting\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_casting.htm) → 

Casting Examples

Continue
![Example](exa.gif "Example") [Field Symbols - Casting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencasting_imp_exp_abexa.htm)
![Example](exa.gif "Example") [Field Symbols, Casting Predefined Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencasting_obsolete_type_abexa.htm)
![Example](exa.gif "Example") [Field Symbols, Casting Decimal Places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencasting_obsolete_dec_abexa.htm)
