  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreference_assignments.htm) →  [Setting Field Symbols](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign.htm) → 

ASSIGN - casting\_spec

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_shortref.htm)

Syntax

... { }
  *|* *{* CASTING *{* *{* *}*
              *|* *{*TYPE type*|*(name)*}*
              *|* *{*LIKE dobj*}*
              *|* *{**\[*TYPE p*\]* DECIMALS dec*}*
              *|* *{*TYPE HANDLE handle*}* *}* *}*
  *|* *{* [obsolete\_casting](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_casting_obsolete.htm) *}* ...

Alternatives:

[1\. ... *{* *}*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... CASTING ...](#!ABAP_ALTERNATIVE_2@2@)

Effect

If specified, casting\_spec defines the data type used to handle the memory area [mem\_area](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area.htm) assigned to the field symbol when a statement is given the field symbol in an operand position. Either the addition CASTING can be specified or nothing at all. Outside of classes, the obsolete variants [obsolete\_casting](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_casting_obsolete.htm) are also possible.

The following restrictions apply:

-   In assignments of [table expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_writable_exp.htm), the first alternative can be used without further additions.
    
-   The CASTING addition cannot be used for [enumerated types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_type_glosry.htm "Glossary Entry"). This means that the assigned memory area must not be an [enumerated object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_object_glosry.htm "Glossary Entry") and the specified data type must not be an enumeration type.
    

Alternative 1

... *{* *}*

Effect

If nothing is specified for casting\_spec, the field symbol is given the data type of the data object used in [mem\_area](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area.htm) and the assigned memory area is handled accordingly. This data type must [match](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_check_general.htm) the [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_glosry.htm "Glossary Entry") of the field symbol.

Example

After the first assignment the field symbol has type c of length 3 and after the second assignment the field symbol has type string. Statement [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdescribe_field.htm) returns the corresponding values C 3 and g.

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

If the addition CASTING is used in casting\_spec, the memory area is handled as if it had the type specified by CASTING. If CASTING is specified, the field symbol cannot be typed using the obsolete addition STRUCTURE of the statement [FIELD-SYMBOLS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfield-symbols.htm).

Casting can either take place implicitly using the typing of the field symbol or explicitly using one of the additions TYPE, LIKE, or DECIMALS. In explicit castings, the field symbol cannot be specified in full; instead it must be specified generically.

Notes

-   If the data type determined by CASTING is [deep](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeep_glosry.htm "Glossary Entry") or if deep data objects are stored in the assigned memory area, the deep components must appear with exactly the same type and position in the assigned memory area. In particular, this means that individual [reference variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreference_variable_glosry.htm "Glossary Entry") can be assigned to only one field symbol that is typed as a reference variable by the same [static type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstatic_type_glosry.htm "Glossary Entry").
    
-   The static check of the statement ASSIGN using the addition CASTING is done is such a way that all errors are identified, regardless of the system or platform on which the check is run. A runtime check only checks the data against the current system or the current platform. These checks likewise always take place if the field symbol <fs> is typed with the obsolete addition STRUCTURE of the statement FIELD SYMBOLS.
    
-   If the addition CASTING is used, the result of the statement ASSIGN may be platform-dependent. The internal [byte order](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbyteorder.htm) of characters can, for example, be platform-dependent, which becomes obvious during a cast to a byte-like data type.
    
-   The memory area [mem\_area](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area.htm) must meet the [alignment requirements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenalignment.htm) of the data type specified by the casting. When flat elementary data types are specified, for example, the memory address mem\_area must be divisible as follows:
    

-   Divisible by 2 for the character-like data types c and n and the date/time types d and t.

-   By 4 for the numeric data type i.

-   By 8 for the numeric data types int8, f, and decfloat16.

-   By 8 for the time stamp type utclong.

-   By 16 for the numeric data type decfloat34.
    

Addition 1

... *{* *}*

Effect

If the addition CASTING is specified without any further additions, the assigned memory area is cast to the type of the field symbol. The field symbol must be either fully typed, or typed with one of the generic built-in ABAP types c, n, p, or x.

Example

Casts the integer 333 as a byte field. Depending on the [byte order](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbyte_order_glosry.htm "Glossary Entry"), the output is either 4D01 or 014D.

TYPES hex4 TYPE x LENGTH 2.
FIELD-SYMBOLS <fs> TYPE hex4.
ASSIGN 333 TO <fs> CASTING.
cl\_demo\_output=>display( <fs> ).

Addition 2

... TYPE type*|*(name)

Effect

Specifies a data type after TYPE explicitly. The name of the type can be specified as follows:

-   type
    

Specified directly and statically as type.

-   (name)
    

Specified as the content of a character-like data object name that contains the name of a data type (in uppercase) when the statement is executed. The following can be specified for name:

-   Literal or constants
    If the data object name is specified as a character literal or as a constant, it can be evaluated statically and the specified type is identified as the used object.

-   Variable
    If the data object name is specified as a variable, it is specified only dynamically and the content is not evaluated statically.

When the statement is executed, name is not evaluated until runtime (in both cases).

The assigned memory area is cast to the specified type. The data type specified after TYPE cannot be generic. The exceptions to this rule are the built-in ABAP types c, n, p, and x. [Table categories](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_tabkind.htm) and REF TO cannot be specified.

The field symbol <fs> can only be typed generically and not in full. The specified data type has to [match](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_check.htm) the generic [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_glosry.htm "Glossary Entry") of the field symbol, meaning that [casting](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencast_casting_glosry.htm "Glossary Entry")s are allowed to specialize the generic typing but not to make more general.

If a generic character-like type c or n is specified after TYPE, the length of the assigned memory area must be a multiple of the length of a character in the memory when the statement is executed.

Example

Casts a time field to a structured type with three components.

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

-   A data object dobj based on the rules for [TYPES ...  LIKE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_referring.htm). The assigned memory area is cast to the data type of the data object.
    
-   A generically typed field symbol.
    

-   If a memory area is assigned to the field symbol, the data type used to handle the memory area is the object of the cast.

-   If no memory area is assigned to the field symbol, a standard type produced by the following rules is used:
    any, c, clike, csequence, data, and simple produce c with length 1.
    decfloat produces decfloat34.
    n produces n with length 1.
    numeric and p produce p with length 8 and no decimal places.
    x and xsequence produce x of the length 1.
    Generic table types raise an exception of the class
    CX\_SY\_ASSIGN\_CAST\_ILLEGAL\_CAST.

-   A generically typed formal parameter.
    

-   If an actual parameter is assigned to the formal parameter, the data type of this parameter is the object of the cast.

-   If no actual parameter is assigned to an optional formal parameter, its [associated](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_generic.htm) [standard type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_type_glosry.htm "Glossary Entry") is used.

The field symbol <fs> can only be typed generically and not in full. The specified data type has to [match](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_check.htm) the generic [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_glosry.htm "Glossary Entry") of the field symbol, meaning that [casting](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencast_casting_glosry.htm "Glossary Entry")s are allowed to specialize the generic typing but not to make more general.

Notes

-   LIKE can be used to refer to the data objects in its own program, and also to the public attributes of global classes.
    
-   The standard type for generically typed field symbols specified after CASTING LIKE displays some differences to the [standard type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_generic.htm) for generic field symbols and formal parameters (length 1 not 4 if any and data are used and no standard type for generic table types).
    
-   If a generically typed field symbol is specified after CASTING LIKE, a memory area should be assigned to it when the statement is executed.
    

Example

Casts a structure with three components to a time field.

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

A numeric data object dec must be specified after DECIMALS. The assigned memory area is cast to the data type p, where the number of [decimal places](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfractional_portion_glosry.htm "Glossary Entry") is determined by the content of dec. The number of decimal places must not exceed the total number of [places](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenplace_glosry.htm "Glossary Entry"). TYPE does not need to be specified for DECIMALS. If TYPE is used, only the data type p can be specified (which is used anyway).

The field symbol <fs> can only be typed generically and not in full. The specified data type has to [match](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_check.htm) the generic [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_glosry.htm "Glossary Entry") of the field symbol, meaning that [casting](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencast_casting_glosry.htm "Glossary Entry")s are allowed to specialize the generic typing but not to make more general.

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

After TYPE HANDLE, a reference variable handle of the static type of the CL\_ABAP\_DATADESCR class or its subclasses is specified and it points to a [type description object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_object_glosry.htm "Glossary Entry") of the [RTTS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry"). The assigned memory area is cast to the type of the field symbol.

The field symbol <fs> can only be typed generically and not in full. The specified data type has to [match](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_check.htm) the generic [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_glosry.htm "Glossary Entry") of the field symbol, meaning that [casting](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencast_casting_glosry.htm "Glossary Entry")s are allowed to specialize the generic typing but not to make more general.

The addition CASTING TYPE HANDLE cannot be used with the addition [RANGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_range.htm).

Note

The type description object may have been created using the RTTS methods on existing data objects, or using the definition of a new data type.

Example

Creates a type description object for a structure and use it to cast a date field.

DATA(struct) = cl\_abap\_structdescr=>create(
  VALUE abap\_component\_tab(
    ( name = 'YEAR'  type = cl\_abap\_elemdescr=>get\_c( p\_length = 4 ) )
    ( name = 'MONTH' type = cl\_abap\_elemdescr=>get\_c( p\_length = 2 ) )
    ( name = 'DAY'   type = cl\_abap\_elemdescr=>get\_c( p\_length = 2 ) )
  ) ).
FIELD-SYMBOLS  <fs> TYPE any.
ASSIGN sy-datlo TO  <fs> CASTING TYPE HANDLE struct.
cl\_demo\_output=>display( <fs> ).

Continue
[Casting Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencasting_obsolete_abexas.htm)