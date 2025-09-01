---
title: "Number Formats"
description: |
  The format of numbers is determined by the column XDEZP of the database table T005X. The decimal and thousands separators shown in the following table are available: XDEZP Decimal Separator Thousands Separator ' ' ',' '.' X '.' ',' Y ',' ' ' The setting for the decimal separator also affects the for
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennumber_formats.htm"
abapFile: "abennumber_formats.htm"
keywords: ["do", "if", "try", "data", "abennumber", "formats"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlanguage.htm) →  [Formatting Settings](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencountry.htm) →  [Country-Specific Formats](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencountry_formats.htm) → 

Number Formats

The format of numbers is determined by the column XDEZP of the database table T005X. The decimal and thousands separators shown in the following table are available:

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

The setting for the decimal separator also affects the formatting of time stamps in [time stamp fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentimestamp_field_glosry.htm "Glossary Entry").

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

For the representation of a number in all possible number formats, see the associated [example with string templates](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_template_number_abexa.htm).