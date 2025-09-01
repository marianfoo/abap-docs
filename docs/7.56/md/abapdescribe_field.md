  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Attributes of Data Objects](javascript:call_link\('abendescribe_field.htm'\)) →  [DESCRIBE](javascript:call_link\('abapdescribe.htm'\)) → 

DESCRIBE FIELD

[Short Reference](javascript:call_link\('abapdescribe_field_shortref.htm'\))

Syntax

DESCRIBE FIELD dobj
  *\[*TYPE typ *\[*COMPONENTS com*\]**\]*
  *\[*LENGTH ilen IN *{*BYTE*|*CHARACTER*}* MODE*\]*
  *\[*DECIMALS dec*\]*
  *\[*OUTPUT-LENGTH olen*\]*
  *\[*HELP-ID hlp*\]*
  *\[*EDIT MASK mask*\]*.

Additions:

[1\. ... TYPE typ *\[*COMPONENTS com*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... LENGTH ilen IN *{*BYTE*|*CHARACTER*}* MODE](#!ABAP_ADDITION_2@2@)
[3\. ... DECIMALS dec](#!ABAP_ADDITION_3@3@)
[4\. ... OUTPUT-LENGTH olen](#!ABAP_ADDITION_4@4@)
[5\. ... HELP-ID hlp](#!ABAP_ADDITION_5@5@)
[6\. ... EDIT MASK mask](#!ABAP_ADDITION_6@6@)

Effect

This statement determines some attributes of the data object dobj and assigns them to the specified target fields. The following can be specified as target fields of each addition:

-   Existing variables to which the return value can be converted.
-   Inline declarations [DATA(var)](javascript:call_link\('abendata_inline.htm'\)).

The different additions make it possible to determine the data type and the number of components for structures, the length used in the memory, the number of [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry"), the output length, the name of the data type for a reference to a data element in the ABAP Dictionary, and any conversion routines.

Hints

-   Field symbols or formal parameters can be specified in [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") for dobj to determine the attributes of the data object they represent when the statement is executed.
-   The statement DESCRIBE is mainly suitable for determining the attributes of data objects of elementary data types. When DESCRIBE is used for structures or data objects of [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data types like strings, internal tables, or reference variables, only elementary attributes can be determined. Additional information, for example, the static or dynamic type of a reference variable cannot be determined using DESCRIBE. For this kind of information, the type description classes of runtime type services ([RTTS](javascript:call_link\('abenrun_time_type_services_glosry.htm'\) "Glossary Entry")) should be used. These enable all data object attributes of all data types to be determined.

Addition 1   

... TYPE typ *\[*COMPONENTS com*\]*

Effect

Determines the data type of the data object dobj. The return value is a single character ID. In an inline declaration for typ, a variable of the type c with length 1 is declared. The following tables list the assignment of return values for all possible data types. The ID is case-sensitive.

The type description classes of [Runtime Type Services (RTTS)](javascript:call_link\('abenrtti.htm'\)) use constants with values that correspond to the internal, character-like IDs for all possible data types. These constants are defined in class CL\_ABAP\_TYPEDESCR and are listed in column RTTS constant.

Numeric Data Type

ID

RTTS constant

b

b

TYPEKIND\_INT1

s

s

TYPEKIND\_INT2

i

I

TYPEKIND\_INT

int8

8

TYPEKIND\_INT8

p

P

TYPEKIND\_PACKED

decfloat16

a

TYPEKIND\_DECFLOAT16

decfloat34

e

TYPEKIND\_DECFLOAT34

f

F

TYPEKIND\_FLOAT

Character-Like Data Type

ID

RTTS constant

c

C

TYPEKIND\_CHAR

n

N

TYPEKIND\_NUM

string

g

TYPEKIND\_STRING

Byte-Like Data Type

ID

RTTS constant

x

X

TYPEKIND\_HEX

xstring

y

TYPEKIND\_XSTRING

Date/Time/Time Stamp Type

ID

RTTS constant

d

D

TYPEKIND\_DATE

t

T

TYPEKIND\_TIME

utclong

p

TYPEKIND\_UTCLONG

Enumerated Type

ID

RTTS constant

Enumerated type

k

TYPEKIND\_ENUM

Reference Type

ID

RTTS constant

Data reference

l

TYPEKIND\_DREF

Object reference

r

TYPEKIND\_OREF

Complex Type

ID

RTTS constant

Flat structure

u

TYPEKIND\_STRUCT1

Deep structure

v

TYPEKIND\_STRUCT2

Internal table

h

TYPEKIND\_TABLE

The addition COMPONENTS determines the number of direct components of the data object dobj. The return value is of type i. For an inline declaration, a variable of type i is declared. If the data object dobj is not a structure, the value 0 is returned. If dobj is a nested structure, only the components of the highest hierarchy level are counted.

Hint

If DESCRIBE FIELD is applied directly to a [static box](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry"), its data type according to the above table is returned and not the internal ID j for the boxed component.

Example

For the [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") nested structure struc1, the type ID "v" and three components are determined. For the [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") structure struc2, the type ID "u" and two components are determined.

DATA: BEGIN OF struc1,
        comp1 TYPE c LENGTH 1,
        comp2 TYPE string,
        BEGIN OF struc2,
          comp1 TYPE c LENGTH 1,
          comp2 TYPE i,
        END OF struc2,
      END OF struc1.
DESCRIBE FIELD: struc1        TYPE DATA(typ1) COMPONENTS DATA(comp1),
                struc1-struc2 TYPE DATA(typ2) COMPONENTS DATA(comp2).

Addition 2   

... LENGTH ilen IN *{*BYTE*|*CHARACTER*}* MODE

Effect

Determines the length used directly by the data object dobj in the memory in bytes or characters depending on the addition MODE. The return value is of type i. For an inline declaration, a variable of type i is declared.

The variant with the addition IN BYTE MODE determines the length of the data object dobj in bytes. The variant with the addition IN CHARACTER MODE determines the length of the data object dobj in characters. When using IN CHARACTER MODE, the data type of dobj must be flat and character-like. For [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") data types, only IN BYTE MODE can be specified and the length of the references involved (eight bytes for each reference) is always determined.

Hints

-   For data objects with a fixed length, the length is determined that is specified when the data object is created. The [built-in function](javascript:call_link\('abenbuiltin_function_glosry.htm'\) "Glossary Entry") strlen can be used to determine the occupied length of character-like data objects while ignoring the trailing blanks.
-   In structures, the [alignment gaps](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry") are part of the length. This is particularly significant in the case of alignment gaps that can occur before the end of the structure.
-   With [enumerated objects](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry"), the addition IN BYTE MODE must be specified and the length of the actual [enumerated value](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") is determined in the [basic type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry").

Example

Calculation of the bytes required for the representation of one character. The result is greater than 1 in multi-byte systems.

DATA: text  TYPE c LENGTH 1,
      bytes TYPE i.
DESCRIBE FIELD text LENGTH DATA(blen) IN BYTE MODE.
DESCRIBE FIELD text LENGTH DATA(clen) IN CHARACTER MODE.
bytes = blen / clen.

Example

The result len of the following DESCRIBE statement is 9, not 10, due to a trailing alignment gap in struct.

DATA:
  BEGIN OF struct,
    text TYPE c LENGTH 3,
    hex  TYPE x LENGTH 3,
  END OF struct.
DESCRIBE FIELD struct LENGTH DATA(len) IN BYTE MODE.

Addition 3   

... DECIMALS dec

Effect

Determines the [number of decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry") of the data object dobj. The return value is of type i. For an inline declaration, a variable of type i is declared.

Hint

Only data objects of the data type p can have decimal places. Therefore, the result in dec can differ from 0 only for these data objects.

Example

The system recognizes 0 decimal places and then 4 decimal places.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main IMPORTING pack TYPE p.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DESCRIBE FIELD pack DECIMALS DATA(dec).
    cl\_demo\_output=>write( dec ).
  ENDMETHOD.
ENDCLASS.
DATA:
  pack1 TYPE p LENGTH 8 DECIMALS 0,
  pack2 TYPE p LENGTH 8 DECIMALS 4.
START-OF-SELECTION.
  demo=>main( pack1 ).
  demo=>main( pack2 ).
  cl\_demo\_output=>display( ).

Addition 4   

... OUTPUT-LENGTH olen

Effect

For data objects with a fixed length, the output length of the data object dobj required for [screen layouts](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") is determined. The return value is of type i. For an inline declaration, a variable of type i is declared.

Generally, this result corresponds to the predefined output length of the data object in accordance with its data type in the output in the list buffer. In strings, olen is always set to 0. olen expects the data type i.

Hints

-   Normally, the required output length is determined sufficiently by the specification in the table for predefined [output lengths](javascript:call_link\('abenwrite_output_length.htm'\)), unless the data type of the data object is defined with a reference to ABAP Dictionary and an output length or a conversion routine is specified in the corresponding domain.
-   If the output length defined in a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") for a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") with the same name as dobj is shorter than the required output length, an overflow raises an uncatchable exception. When passed to the list buffer, the outputs are truncated if the output length is shorter than the required output length.
-   When separators or templates are defined in the user master record for the output of a data type, they are only displayed if the defined output length is sufficient. The required length can be longer than the output length determined by OUTPUT-LENGTH.
-   The output length for strings can be determined using the functions strlen or xstrlen.

Example

For date1, the output length 8 linked with the type d is determined. For date2, the output length 10 defined in the domain SYDATS is determined.

DATA: date1 TYPE d,
      date2 TYPE sy-datum.
DESCRIBE FIELD date1 OUTPUT-LENGTH DATA(olen1).
DESCRIBE FIELD date2 OUTPUT-LENGTH DATA(olen2).

Addition 5   

... HELP-ID hlp

Effect

If the data type of the data object dobj is determined by a [DDIC data element](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry"), the name of the data type is assigned that was used after the addition TYPE when defining the data object dobj. The return value is a string. In an inline declaration, a variable of the type string is declared.

If the data object does not refer to a data object in the ABAP Dictionary, hlp is initialized. hlp expects a character-like data object.

If a field symbol, to which a structure component is assigned using the statement ASSIGN COMPONENT, is specified for dobj, and if the structure component refers to a component of a DDIC structure, then the complete name of the structure component is returned.

Hint

The addition is called HELP-ID because the name of the data type in hlp can be used to call the field help or input help assigned in the ABAP Dictionary.

Example

After DESCRIBE FIELD, hlp contains the value "SPFLI-CARRID". Since an input help is assigned to this component in the ABAP Dictionary, the input help can be called using the function module F4IF\_FIELD\_VALUE\_REQUEST. If the name s\_carr\_id is specified after TYPE when defining carrid, hlp contains the value "S\_CARR\_ID" and can be used, for example, to call the field help using the function module HELP\_OBJECT\_SHOW.

DATA: carrid TYPE spfli-carrid,
      struc  TYPE dfies-tabname,
      comp   TYPE dfies-fieldname.
DESCRIBE FIELD carrid HELP-ID DATA(hlp).
SPLIT hlp AT '-' INTO struc comp.
CALL FUNCTION 'F4IF\_FIELD\_VALUE\_REQUEST'
  EXPORTING
    tabname           = struc
    fieldname         = comp
  EXCEPTIONS
    field\_not\_found   = 1
    no\_help\_for\_field = 2
    inconsistent\_help = 3
    no\_values\_found   = 4
    OTHERS            = 5.

Example

hlp also contains the value "SPFLI-CARRID" after DESCRIBE FIELD in this example.

DATA spfli TYPE spfli.
ASSIGN COMPONENT 'CARRID' OF STRUCTURE spfli TO
FIELD-SYMBOL(<fs>).
DESCRIBE FIELD <fs> HELP-ID DATA(hlp).

Addition 6   

... EDIT MASK mask

Effect

If a conversion routine is assigned to the data object dobj by referring to a domain in the ABAP Dictionary, the name of the conversion routine is determined and prefixed with two equal signs "==". The return value is a string. In an inline declaration, a variable of the type string is declared. If no conversion routine is assigned to the data object, mask is initialized or remains initial.

Hint

If a data object mask meets these requirements, it can be used directly in the addition USING EDIT MASK of the statement WRITE *\[*TO*\]* to call the conversion routine.

Example

Since the data element S\_FLTIME in the ABAP Dictionary is linked with the conversion routine SDURA by the domain S\_DURA, msk contains the value "==SDURA" after DESCRIBE FIELD and the statement WRITE TO returns the value "5:33" after the conversion from seconds to minutes.

DATA: time    TYPE s\_fltime,
      seconds TYPE i,
      output  TYPE c LENGTH 10.
DESCRIBE FIELD time EDIT MASK DATA(msk).
seconds = 333.
WRITE seconds TO output USING EDIT MASK msk.
cl\_demo\_output=>display\_data( output ).

Continue
![Example](exa.gif "Example") [Determining Elementary Data Types](javascript:call_link\('abendescribe_field_abexa.htm'\))