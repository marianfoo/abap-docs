---
title: "Number Formats"
description: |
  The format of numbers is specified by the column XDEZP of the database table T005X. The options in the table below are available for displaying decimal separators and thousands separators: XDEZP Decimal Separator Thousands Separator ' ' ',' '.' X '.' ',' Y ',' ' ' Example Produces a number with diff
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumber_formats.htm"
abapFile: "abennumber_formats.htm"
keywords: ["do", "if", "try", "data", "abennumber", "formats"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlanguage.htm) →  [Formatting Settings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry.htm) →  [Country-Specific Formats](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencountry_formats.htm) → 

Number Formats

The format of numbers is specified by the column XDEZP of the database table T005X. The options in the table below are available for displaying decimal separators and thousands separators:

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

Example

Produces a number with differing decimal and thousand separators.

DATA pack TYPE p DECIMALS 2 VALUE '1234.56'.
cl\_demo\_output=>display(
  |{ pack COUNTRY = 'DE ' }\\n{ pack COUNTRY = 'US ' }| ).

Executable Example

To see the display of a number in all possible formats, see the respective [example with character string templates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_template_number_abexa.htm).