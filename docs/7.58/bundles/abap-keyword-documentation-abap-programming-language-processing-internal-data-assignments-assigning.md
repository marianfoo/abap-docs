# ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Assignments / Assigning References / Assigning Field Symbols / ASSIGN / ASSIGN, casting_spec

Included pages: 6


### abapassign_casting.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_assignments.htm) →  [Assigning Field Symbols](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ASSIGN%2C%20casting_spec%2C%20ABAPASSIGN_CASTING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ASSIGN, casting\_spec

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_shortref.htm)

Syntax

... { }
  *|* *{* CASTING *{* *{* *}*
              *|* *{*TYPE type*|*(name)*}*
              *|* *{*LIKE dobj*}*
              *|* *{**\[*TYPE p*\]* DECIMALS dec*}*
              *|* *{*TYPE HANDLE handle*}* *}* *}*
  *|* *{* [obsolete\_casting](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_casting_obsolete.htm) *}* ...

Alternatives:

[1\. ... *{* *}*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... CASTING ...](#!ABAP_ALTERNATIVE_2@2@)

Effect

The specification casting\_spec defines the data type used to handle the memory area [mem\_area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area.htm) assigned to the field symbol when a statement contains the field symbol in an operand position. Either the addition CASTING can be specified or nothing at all. Outside of classes, the obsolete variants [obsolete\_casting](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_casting_obsolete.htm) are also possible.

The following restrictions apply:

-   In assignments of [table expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area_writable_exp.htm), only the first alternative can be used without further additions.
-   The CASTING addition cannot be used for [enumerated types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_type_glosry.htm "Glossary Entry"). This means that the assigned memory area must not be an [enumerated object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenumerated_object_glosry.htm "Glossary Entry") and the specified data type must not be an enumerated type.

Alternative 1   

... *{* *}*

Effect

If nothing is specified for casting\_spec, the field symbol inherits the data type of the data object used in [mem\_area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area.htm) and the assigned memory area is handled accordingly. This data type must [match](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check_general.htm) the [typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_glosry.htm "Glossary Entry") of the field symbol.

Example

After the first assignment the field symbol has type c of length 3 and after the second assignment the field symbol has type string. The statement [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdescribe_field.htm) returns the corresponding values C 3 and g.

FIELD-SYMBOLS <fs> TYPE csequence.
ASSIGN 'xxx' TO <fs>.
DESCRIBE FIELD <fs> TYPE DATA(type)
                    LENGTH FINAL(length) IN CHARACTER MODE.
cl\_demo\_output=>write( type ).
ASSIGN \`xxx\` TO <fs>.
DESCRIBE FIELD <fs> TYPE type.
cl\_demo\_output=>display( type ).

Alternative 2   

... CASTING ...

Additions:

[1\. ... *{* *}*](#!ABAP_ADDITION_1@1@)
[2\. ... TYPE type*|*(name)](#!ABAP_ADDITION_2@2@)
[3\. ... LIKE dobj](#!ABAP_ADDITION_3@3@)
[4\. ... *\[*TYPE p*\]* DECIMALS dec](#!ABAP_ADDITION_4@4@)
[5\. ... TYPE HANDLE handle](#!ABAP_ADDITION_5@5@)

Effect

If the addition CASTING is used in casting\_spec, the memory area is handled as if it had the type specified by CASTING. If CASTING is specified, the field symbol cannot be typed using the obsolete addition STRUCTURE of the statement [FIELD-SYMBOLS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfield-symbols.htm).

Casting can either take place implicitly using the typing of the field symbol or explicitly using one of the additions TYPE, LIKE, or DECIMALS. In explicit castings, the field symbol can only be typed generically, not completely.

Hints

-   If the data type determined by CASTING is [deep](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeep_glosry.htm "Glossary Entry") or if deep data objects are stored in the assigned memory area, the deep components must appear with exactly the same type and position in the assigned memory area. In particular, this means that individual [reference variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_variable_glosry.htm "Glossary Entry") can be assigned to only one field symbol that is typed as a reference variable by the same [static type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstatic_type_glosry.htm "Glossary Entry").
-   If the addition CASTING is used, the result of the statement ASSIGN may be platform-dependent. The internal [byte order](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbyteorder.htm) of characters can, for example, be platform-dependent, which becomes apparent in a cast to a byte-like data type.
-   The memory area [mem\_area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_mem_area.htm) must meet the [alignment requirements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenalignment.htm) of the data type specified by the casting. When flat elementary data types are specified, for example, the memory address mem\_area must be divisible as follows:
    -   By 2 for the character-like data types c and n and the date/time types d and t.
    -   By 4 for the numeric data type i.
    -   By 8 for the numeric data types int8, f, and decfloat16.
    -   By 8 for the time stamp type utclong.
    -   By 16 for the numeric data type decfloat34.
-   The static check of the statement ASSIGN using the addition CASTING is performed so that all errors are identified, regardless of the system or platform on which the check is run. A runtime check only checks the current system or the current platform.
-   These checks also always take place if the field symbol <fs> is typed with the obsolete addition STRUCTURE of the statement FIELD-SYMBOLS.

Addition 1   

... *{* *}*

Effect

If the addition CASTING is specified without further additions, the assigned memory area is cast to the type of the field symbol. The field symbol must be either completely typed or with one of the generic built-in ABAP types c, n, p, or x.

Example

Casting of the integer 333 as a byte field. Depending on the [byte order](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbyte_order_glosry.htm "Glossary Entry"), the output is either 4D01 or 014D.

TYPES hex4 TYPE x LENGTH 2.
FIELD-SYMBOLS <fs> TYPE hex4.
ASSIGN 333 TO <fs> CASTING.
cl\_demo\_output=>display( <fs> ).

Addition 2   

... TYPE type*|*(name)

Effect

Explicit specification of a data type after TYPE. The name of the type can be specified as follows:

-   type
    
    Direct static specification as type.
    
-   (name)
    
    Specification as the content of a character-like data object name that contains the name of a data type in uppercase letters when the statement is executed. The following can be specified for name:
    
    -   Literal or constants
        
        If the data object name is specified as a character literal or as a constant, it can be evaluated statically, and the specified type is recognized as the used object.
        
    -   Variable
        
        If the data object name is specified as a variable, it is specified only dynamically, and the content is not evaluated statically.
        
    
    When the statement is executed, name is not evaluated until runtime in both cases.
    

The assigned memory area is cast to the specified type. The data type specified after TYPE cannot be generic, apart from the built-in ABAP types c, n, p, and x. Furthermore, [table categories](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_tabcat.htm) and REF TO cannot be specified.

The field symbol <fs> can only be typed generically and not completely. The specified data type must [match](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check.htm) the generic [typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_glosry.htm "Glossary Entry") of the field symbol, meaning that [castings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencast_casting_glosry.htm "Glossary Entry") are allowed to specialize the generic typing but not to make it more general.

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

In the following example, one of the two ASSIGN statements produces a runtime error because the alignment requirement for the type c is not met. Which of the statements produces the runtime error is not generally defined and depends on the preceding declarations.

DATA hex TYPE x LENGTH 10.
FIELD-SYMBOLS <fs> TYPE any.
ASSIGN hex+0(4) TO <fs> CASTING type c.
ASSIGN hex+1(4) TO <fs> CASTING type c.

Addition 3   

... LIKE dobj

Effect

The following can be specified after LIKE:

-   A data object dobj according to the rules for [TYPES ...  LIKE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_referring.htm). The assigned memory area is cast to the data type of the data object.
-   A generically typed field symbol.
    -   If a memory area is assigned to the field symbol, the data type used to handle the memory area is the object of the cast.
    -   If no memory area is assigned to the field symbol, a standard type resulting from the following rules is used:
        
        any, c, clike, csequence, data, and simple produce c with length 1.
        
        decfloat produces decfloat34.
        
        n produces n with length 1.
        
        numeric and p produce p with length 8 and no decimal places.
        
        x and xsequence produce x of the length 1.
        
        Generic table types raise an exception of the class CX\_SY\_ASSIGN\_CAST\_ILLEGAL\_CAST.
        
-   A generically typed formal parameter.
    -   If an actual parameter is assigned to the formal parameter, the data type of this parameter is the object of the cast.
    -   If no actual parameter is assigned to an optional formal parameter, its [associated](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_generic.htm) [standard type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_type_glosry.htm "Glossary Entry") is used.

The field symbol <fs> can only be typed generically and not completely. The specified data type must [match](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check.htm) the generic [typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_glosry.htm "Glossary Entry") of the field symbol, meaning that [castings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencast_casting_glosry.htm "Glossary Entry") are allowed to specialize the generic typing but not to make it more general.

Hints

-   LIKE can be used to refer to the data objects in its own program, and also to the public attributes of global classes.
-   The standard type for generically typed field symbols specified after CASTING LIKE differs slightly from the [standard type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_generic.htm) for generic field symbols and formal parameters (length 1 not 4 if any and data are used and no standard type for generic table types).
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

A numeric data object dec must be specified after DECIMALS. The assigned memory area is cast to the data type p, where the number of [decimal places](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendecimal_place_glosry.htm "Glossary Entry") is determined by the content of dec. The number of decimal places must not exceed the total number of [places](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenplace_glosry.htm "Glossary Entry"). TYPE does not need to be specified for DECIMALS. If TYPE is used, only the data type p, which is used anyway, can be specified.

The field symbol <fs> can only be typed generically and not completely. The specified data type must [match](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check.htm) the generic [typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_glosry.htm "Glossary Entry") of the field symbol, meaning that [castings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencast_casting_glosry.htm "Glossary Entry") are allowed to specialize the generic typing but not to make it more general.

Example

The calculation of the quotient from the packed number pack and the field symbol <pack> demonstrates the effect of casting with the addition DECIMALS. Factors between 10 and 100,000,000 are determined. When using <pack> in operand positions, a different value is used than when using pack.

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

After TYPE HANDLE, a reference variable handle of the static type of the class CL\_ABAP\_DATADESCR or its subclasses is specified that points to a [type description object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_object_glosry.htm "Glossary Entry") of the [RTTS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry"). The assigned memory area is cast to the type of the field symbol.

The field symbol <fs> can only be typed generically and not completely. The specified data type must [match](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check.htm) the generic [typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_glosry.htm "Glossary Entry") of the field symbol, meaning that [castings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencast_casting_glosry.htm "Glossary Entry") are allowed to specialize the generic typing but not to make it more general.

The addition CASTING TYPE HANDLE cannot be used with the addition [RANGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_range.htm).

Hint

The type description object may have been created using the RTTS methods on existing data objects, or using the definition of a new data type.

Example

Generation of a type description object for a structure and using it to cast a date field.

FINAL(struct) = cl\_abap\_structdescr=>create(
  VALUE abap\_component\_tab(
    ( name = 'YEAR'  type = cl\_abap\_elemdescr=>get\_c( p\_length = 4 ) )
    ( name = 'MONTH' type = cl\_abap\_elemdescr=>get\_c( p\_length = 2 ) )
    ( name = 'DAY'   type = cl\_abap\_elemdescr=>get\_c( p\_length = 2 ) )
  ) ).
FIELD-SYMBOLS  <fs> TYPE any.
ASSIGN sy-datlo TO  <fs> CASTING TYPE HANDLE struct.
cl\_demo\_output=>display( <fs> ).

Continue
[Casting Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencasting_obsolete_abexas.htm)


### abencasting_obsolete_abexas.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_assignments.htm) →  [Assigning Field Symbols](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign.htm) →  [ASSIGN, casting\_spec](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_casting.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Casting%20Examples%2C%20ABENCASTING_OBSOLETE_ABEXAS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Casting Examples

-   [Field Symbols, Casting](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencasting_imp_exp_abexa.htm)
-   [Field Symbols, Casting Built-In Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencasting_obsolete_type_abexa.htm)
-   [Field Symbols, Casting Decimal Places](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencasting_obsolete_dec_abexa.htm)

Continue
![Example](exa.gif "Example") [Field Symbols, Casting](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencasting_imp_exp_abexa.htm)
![Example](exa.gif "Example") [Field Symbols, Casting Built-In Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencasting_obsolete_type_abexa.htm)
![Example](exa.gif "Example") [Field Symbols, Casting Decimal Places](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencasting_obsolete_dec_abexa.htm)


### abencasting_imp_exp_abexa.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_assignments.htm) →  [Assigning Field Symbols](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign.htm) →  [ASSIGN, casting\_spec](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_casting.htm) →  [Casting Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencasting_obsolete_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Field%20Symbols%2C%20Casting%2C%20ABENCASTING_IMP_EXP_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Field Symbols, Casting

This example demonstrates how castings are performed when the type is specified implicitly and explicitly.

Source Code   

\* Public class definition
CLASS cl\_demo\_fld\_smbls\_casting DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_fld\_smbls\_casting IMPLEMENTATION.
  METHOD main.
    TYPES: BEGIN OF t\_date,
             year  TYPE n LENGTH 4,
             month TYPE n LENGTH 2,
             day   TYPE n LENGTH 2,
           END OF t\_date.
    FIELD-SYMBOLS: <fs1> TYPE t\_date,
                   <fs2> TYPE any,
                   <fs3> TYPE n.
    out->write\_text( |sy-datum: { sy-datum }|
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
      ASSIGN <fs2>-(sy-index) TO <fs3>.
      IF sy-subrc <> 0.
        EXIT.
      ENDIF.
      out->write\_text( |Component { sy-index }: { <fs3> }| ).
    ENDDO.
  ENDMETHOD.
ENDCLASS.

Description   

An implicit casting is performed in the first part of the method main. The field symbol <fs1> is completely typed with the local type t\_date. The field sy-datum can be handled as a structure using the addition CASTING of the statement ASSIGN. This assignment would not be possible without the CASTING addition, since sy-datum is not compatible with the type of the field symbol.

An explicit casting is performed in the second part of the method main. The field symbol <fs2> is completely generic. A cast is performed to the local type t\_date for the field sy-datum using the addition CASTING of the statement ASSIGN. The field symbol <fs2> can now be handled like a structure but does not recognize components. For this reason, it must be assigned to another field symbol <fs3>, component by component.


### abencasting_obsolete_type_abexa.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_assignments.htm) →  [Assigning Field Symbols](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign.htm) →  [ASSIGN, casting\_spec](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_casting.htm) →  [Casting Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencasting_obsolete_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Field%20Symbols%2C%20Casting%20Built-In%20Data%20Types%2C%20ABENCASTING_OBSOLETE_TYPE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

Field Symbols, Casting Built-In Data Types

This example demonstrates how a casting is performed on built-in data types.

Source Code   

\* Public class definition
CLASS cl\_demo\_fld\_smbls\_assign\_type DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_fld\_smbls\_assign\_type IMPLEMENTATION.
  METHOD main.
    DATA txt(8) TYPE c VALUE '20050606'.
    DATA mytype(1) VALUE 'X'.
    FIELD-SYMBOLS <fs> TYPE any.
    out->begin\_section( 'Cast with built-in types' ).
    ASSIGN txt TO <fs>.
    out->write( |<fs> with inherited type c: { <fs> }| ).
\* correct -------------------------------------------------------------
    ASSIGN txt TO <fs> CASTING TYPE i.
    out->write( |<fs> casted with i: { <fs> }| ).
    ASSIGN txt TO <fs> CASTING TYPE (mytype).
    out->write( |<fs> casted with x: { <fs> }| ).
\* obsolete, not allowed in methods ------------------------------------
    "ASSIGN txt TO <fs> TYPE 'D'.
    "ASSIGN txt TO <fs> TYPE mytype.
  ENDMETHOD.
ENDCLASS.

Description   

This example demonstrates how casting works on built-in data types. First the character string txt is assigned to the field symbol <fs> without casting. Afterwards, txt is assigned to <fs> using casting on types i and x. The second output value depends on the byte order of the current platform. The paired numbers in the last output line represent the hexadecimal code for the character in txt and depend on the character representation on the current AS instance.

The section of the method that has been commented out also shows the syntax for the respective [obsolete casting](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_casting_obsolete.htm).


### abencasting_obsolete_dec_abexa.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_assignments.htm) →  [Assigning Field Symbols](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign.htm) →  [ASSIGN, casting\_spec](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_casting.htm) →  [Casting Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencasting_obsolete_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Field%20Symbols%2C%20Casting%20Decimal%20Places%2C%20ABENCASTING_OBSOLETE_DEC_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

Field Symbols, Casting Decimal Places

This example demonstrates how a casting of decimal places is performed.

Source Code   

\* Public class definition
CLASS cl\_demo\_fld\_smbls\_assign\_deci DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_fld\_smbls\_assign\_deci IMPLEMENTATION.
  METHOD main.
    DATA: pack1 TYPE p DECIMALS 2 VALUE '400',
          pack2 TYPE p DECIMALS 2,
          pack3 TYPE p DECIMALS 2.
    FIELD-SYMBOLS: <f1> TYPE any,
                   <f2> TYPE any.
    out->begin\_section( 'Cast of decimal places' ).
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
\* obsolete, not allowed in methods -------------------------------------
    "ASSIGN pack1 TO <f1> DECIMALS 1.
    "pack2 = <f1>.
    "ASSIGN pack2 TO <f2> DECIMALS 4.
    "pack3 = <f1> + <f2>.
    "<f2> = '1234.56789'.
  ENDMETHOD.
ENDCLASS.

Description   

The three fields of type p all have two decimal places. The field symbols <f1> and <f2> are given one or four decimal places. The numeric values are different for the field symbols and the assigned fields.

The section of the method that has been commented out also shows the syntax for the respective [obsolete casting](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_casting_obsolete.htm).


### abencasting_obsolete_abexas.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_assignments.htm) →  [Assigning Field Symbols](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign.htm) →  [ASSIGN, casting\_spec](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_casting.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Casting%20Examples%2C%20ABENCASTING_OBSOLETE_ABEXAS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Casting Examples

-   [Field Symbols, Casting](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencasting_imp_exp_abexa.htm)
-   [Field Symbols, Casting Built-In Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencasting_obsolete_type_abexa.htm)
-   [Field Symbols, Casting Decimal Places](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencasting_obsolete_dec_abexa.htm)

Continue
![Example](exa.gif "Example") [Field Symbols, Casting](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencasting_imp_exp_abexa.htm)
![Example](exa.gif "Example") [Field Symbols, Casting Built-In Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencasting_obsolete_type_abexa.htm)
![Example](exa.gif "Example") [Field Symbols, Casting Decimal Places](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencasting_obsolete_dec_abexa.htm)
