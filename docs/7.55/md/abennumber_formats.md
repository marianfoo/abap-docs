  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlanguage.htm) →  [Formatting Settings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencountry.htm) →  [Country-Specific Formats](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencountry_formats.htm) → 

Number Formats

The format of numbers is specified by the column XDEZP of the database table T005X. The decimal and thousands separators shown in the following table are available:

XDEZP

Decimal Separator

Thousands Separator

" "

","

"."

X

"."

","

Y

","

" "

The setting for the decimal separator also affects the formatting of time stamps in [time stamp fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentimestamp_field_glosry.htm "Glossary Entry").

Hint

The values for XDEZP are defined by the fixed values of domain XUDCPFM.

Example

Output of a number and time stamp with different separators.

DATA pack TYPE p DECIMALS 2 VALUE '1234.56'.
DATA(utcl) =  utclong\_current( ).
cl\_demo\_output=>display(
  |{ pack COUNTRY = 'DE ' }\\n{
     pack COUNTRY = 'US ' }\\n{
     utcl COUNTRY = 'DE ' }\\n{
     utcl COUNTRY = 'US ' }| ).

Executable Example

To see the representation of a number in all possible formats, see the respective [example with string templates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_template_number_abexa.htm).