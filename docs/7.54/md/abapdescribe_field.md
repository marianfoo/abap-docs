---
title: "DESCRIBE FIELD"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdescribe_field_shortref.htm) Syntax DESCRIBE FIELD dobj TYPE typ COMPONENTS com LENGTH ilen IN BYTECHARACTER MODE DECIMALS dec OUTPUT-LENGTH olen HELP-ID hlp
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdescribe_field.htm"
abapFile: "abapdescribe_field.htm"
keywords: ["select", "do", "while", "if", "case", "try", "method", "class", "data", "types", "internal-table", "field-symbol", "abapdescribe", "field"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Attributes of Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendescribe_field.htm) →  [DESCRIBE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdescribe.htm) → 

DESCRIBE FIELD

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdescribe_field_shortref.htm)

Syntax

DESCRIBE FIELD dobj
  *\[*TYPE typ *\[*COMPONENTS com*\]**\]*
  *\[*LENGTH ilen IN *{*BYTE*|*CHARACTER*}* MODE*\]*
  *\[*DECIMALS dec*\]*
  *\[*OUTPUT-LENGTH olen*\]*
  *\[*HELP-ID hlp*\]*
  *\[*EDIT MASK mask*\]*.

Extras:

[1\. ... TYPE typ *\[*COMPONENTS com*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... LENGTH ilen IN *{*BYTE*|*CHARACTER*}* MODE](#!ABAP_ADDITION_2@2@)
[3\. ... DECIMALS dec](#!ABAP_ADDITION_3@3@)
[4\. ... OUTPUT-LENGTH olen](#!ABAP_ADDITION_4@4@)
[5\. ... HELP-ID hlp](#!ABAP_ADDITION_5@5@)
[6\. ... EDIT MASK mask](#!ABAP_ADDITION_6@6@)

Effect

This statement determines multiple attributes of the data object dobj and assigns them to the specified target fields. The following can be specified as target fields of each addition:

-   Existing variables to which the return value can be converted.
    
-   Inline declarations [DATA(var)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm).
    

The various additions make it possible to determine the data type and the number of components for structures, the length used in the memory, the number of [decimal places](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfractional_portion_glosry.htm "Glossary Entry"), the output length, the name of the data type for a reference to a data element in ABAP Dictionary, and any conversion routines.

Notes

-   Field symbols or formal parameters can be specified in [procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm "Glossary Entry") for dobj to identify the attributes of the data object they represent when the statement is executed.
    
-   The statement DESCRIBE is used to determine the attributes of data objects of elementary data types. When DESCRIBE is used for structures or data objects of [deep](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeep_glosry.htm "Glossary Entry") data types like strings, internal tables, or reference variables, only elementary attributes can be identified. Further details, for example, the static or dynamic type of a reference variable cannot be identified using DESCRIBE. For this kind of information, the type description classes of runtime type services ([RTTS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry")) should be used. These enable all data object attributes of all data types to be determined.
    

Addition 1

... TYPE typ *\[*COMPONENTS com*\]*

Effect

Determines the data type of the data object dobj. The return value is a single character character-like ID. In an inline declaration, a variable of the type c with length 1 is declared. The following tables list the assignment of return codes for all possible data types. The ID is case-sensitive.

Numeric Data Type

ID

b

b

s

s

i

I

int8

8

p

P

decfloat16

a

decfloat34

e

f

F

Character-Like Data Type

ID

c

C

n

N

string

g

Byte-Like Data Type

ID

x

X

xstring

y

Date Type/Time Type/Time Stamp Type

ID

d

D

t

T

utclong

p

Enumerated Type

ID

Enumerated type

k

Reference Type

ID

Data reference

l

Object reference

r

Complex Type

ID

Flat structure

u

Deep structure

v

Internal table

h

The addition COMPONENTS determines the number of direct components of the data object dobj. The return value is of type i. For an inline declaration, a variable of type i is declared. If the data object dobj is not a structure, the value 0 is returned. If dobj is a nested structure, only the components of the highest hierarchy level are counted.

Note

If DESCRIBE FIELD is applied directly to a [static box](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstatic_box_glosry.htm "Glossary Entry"), its data type according to the above table is returned and not the internal ID j for the boxed component.

Example

For the [deep](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeep_glosry.htm "Glossary Entry") nested structure struc1, identifies the type ID "v" and three components. For the [flat](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenflat_glosry.htm "Glossary Entry") structure struc2, identifies the type ID "u" and two components.

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

The variant with the addition IN BYTE MODE identifies the length of the data object dobj in bytes. The variant with the addition IN CHARACTER MODE identifies the length of the data object dobj in characters. When using IN CHARACTER MODE, the data type of dobj must be flat and character-like. For [deep](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeep_glosry.htm "Glossary Entry") data types, only IN BYTE MODE can be specified. This always identifies the length of the references involved (eight bytes for each reference).

Notes

-   For data objects with a fixed length, the length is determined that is specified when the data object is created. The [built-in function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredefined_function_glosry.htm "Glossary Entry") strlen can be used to identify the used length of character-like data objects while ignoring the trailing blanks.
    
-   In structures, the [alignment gaps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenalignment_gap_glosry.htm "Glossary Entry") are included in the length. This is particularly significant in the case of alignment gaps that occur before the end of the structure.
    
-   With [enumerated objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_object_glosry.htm "Glossary Entry"), the addition IN BYTE MODE must be specified and the length of the actual [enumerated value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_value_glosry.htm "Glossary Entry") is determined in the [basic type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbase_type_glosry.htm "Glossary Entry").
    

Example

Calculates the bytes required for the representation of one character. The result is greater than 1 in multi-byte systems.

DATA: text  TYPE c LENGTH 1,
      bytes TYPE i.
DESCRIBE FIELD text LENGTH DATA(blen) IN BYTE MODE.
DESCRIBE FIELD text LENGTH DATA(clen) IN CHARACTER MODE.
bytes = blen / clen.

Example

The result len of the following DESCRIBE statement is 9, not 10, due to a trailing alignment gap in struct.

DATA:
  BEGIN OF struct,
    text       TYPE c LENGTH 3,
    hex  TYPE x LENGTH 3,
  END OF struct.
DESCRIBE FIELD struct LENGTH DATA(len) IN BYTE MODE.

Addition 3

... DECIMALS dec

Effect

Determines the [number of decimal places](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfractional_portion_glosry.htm "Glossary Entry") of the data object dobj. The return value is of type i. For an inline declaration, a variable of type i is declared.

Note

Only data objects of the data type p can have decimal places. Therefore, the result in dec can be different from 0 only for these data objects.

Example

Detects 0 decimal places and then 4 decimal places.

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

For data objects with a fixed length, determines the output length of the data object dobj required for [screen layouts](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenscreen_glosry.htm "Glossary Entry"). The return value is of type i. For an inline declaration, a variable of type i is declared.

Generally, this result corresponds to the predefined output length of the data object in accordance with its data type in the output in the list buffer. In strings, olen is always set to 0. olen expects the data type i.

Notes

-   Normally, the required output length is specified adequately by the entry in the table for predefined [output lengths](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwrite_output_length.htm). This is not the case when the data type of the data object is defined with a reference to ABAP Dictionary and an output length or a conversion routine is specified in the corresponding domain.
    
-   If the output length defined in a [dynpro](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm "Glossary Entry") for a [dynpro field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_field_glosry.htm "Glossary Entry") with the same name as dobj is shorter than the required output length, an overflow raises a non-handleable exception. When passed to the list buffer, the outputs are truncated if the output length is shorter than the required output length.
    
-   When separators or templates are provided in the user master record for the output of a data type, they are only displayed if the defined output length is sufficient. The required length can be longer than the output length identified by OUTPUT-LENGTH.
    
-   The output length for strings can be determined using the functions strlen or xstrlen.
    

Example

For date1, identifies the output length 8 associated with the type d. For date2, identifies the output length 10 defined in the domain SYDATS.

DATA: date1 TYPE d,
      date2 TYPE sy-datum.
DESCRIBE FIELD date1 OUTPUT-LENGTH DATA(olen1).
DESCRIBE FIELD date2 OUTPUT-LENGTH DATA(olen2).

Addition 5

... HELP-ID hlp

Effect

If the data type of the data object dobj is determined by a [data element](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_element_glosry.htm "Glossary Entry") in ABAP Dictionary, the name of the data type is assigned that was used after the addition TYPE when defining the data object dobj. The return value is a string. In an inline declaration, a variable of the type string is declared.

If the data object does not refer to a data object in ABAP Dictionary, hlp is initialized. hlp expects a character-like data object.

If a field symbol - to which a data object is assigned using the statement ASSIGN COMPONENT - is specified for dobj, and if the data object refers to a component of a structure in ABAP Dictionary, then the complete name of the structure component is returned.

Note

The addition is called HELP-ID because the name of the data type in hlp can be used for the display of the field help or input help assigned in ABAP Dictionary.

Example

After DESCRIBE FIELD, hlp contains the value "SPFLI-CARRID". Since an input help is assigned to this component in ABAP Dictionary, the input help can be displayed using the function module F4IF\_FIELD\_VALUE\_REQUEST. If the name s\_carr\_id is specified after TYPE when defining carrid, hlp contains the value "S\_CARR\_ID” and can be used, for example, to display the field help using the function module HELP\_OBJECT\_SHOW.

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

Again in this example, hlp contains the value "SPFLI-CARRID" after DESCRIBE FIELD.

DATA spfli TYPE spfli.
ASSIGN COMPONENT 'CARRID' OF STRUCTURE spfli TO FIELD-SYMBOL(<fs>).
DESCRIBE FIELD <fs> HELP-ID DATA(hlp).

Addition 6

... EDIT MASK mask

Effect

If a conversion routine is assigned to the data object dobj by referring to a domain in ABAP Dictionary, the name of the conversion routine is determined and prefixed with two equals signs "==". The return value is a string. In an inline declaration, a variable of the type string is declared. If no conversion routine is assigned to the data object, mask is initialized or remains initial.

Note

If a data object mask meets these requirements, it can be used directly in the addition USING EDIT MASK of the statement WRITE *\[*TO*\]* to call the conversion routine.

Example

Since the data element S\_FLTIME is associated with the conversion routine SDURA by the domain S\_DURA, msk contains the value "==SDURA" after DESCRIBE FIELD and the statement WRITE TO returns the value "5:33" after the conversion from seconds to minutes.

DATA: time    TYPE s\_fltime,
      seconds TYPE i,
      output  TYPE c LENGTH 10.
DESCRIBE FIELD time EDIT MASK DATA(msk).
seconds = 333.
WRITE seconds TO output USING EDIT MASK msk.
cl\_demo\_output=>display\_data( output ).

Continue
![Example](exa.gif "Example") [Determining Elementary Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendescribe_field_abexa.htm)