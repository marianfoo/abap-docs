  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlanguage.htm) →  [Formatting Settings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencountry.htm) →  [Country-Specific Formats](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencountry_formats.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Number%20Formats%2C%20ABENNUMBER_FORMATS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Number Formats

The format of numbers is determined by the column XDEZP of the database table T005X. The decimal and thousands separators shown in the following table are available:

XDEZP

Decimal Separator

Thousands Separator

blank

","

"."

X

"."

","

Y

","

blank

The setting for the decimal separator also affects the formatting of time stamps in [time stamp fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentimestamp_field_glosry.htm "Glossary Entry").

Hint

The values for XDEZP are defined by the fixed values of domain XUDCPFM.

Example

Output of a number and time stamp with different separators.

DATA pack TYPE p DECIMALS 2 VALUE '1234.56'.
FINAL(utcl) =  utclong\_current( ).
cl\_demo\_output=>display(
  |{ pack COUNTRY = 'DE ' }\\n{
     pack COUNTRY = 'US ' }\\n{
     utcl COUNTRY = 'DE ' }\\n{
     utcl COUNTRY = 'US ' }| ).

Executable Example

For the representation of a number in all possible number formats, see the associated [example with string templates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_template_number_abexa.htm).