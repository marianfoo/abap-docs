---
title: "Syntax"
description: |
  ... ( bit_exp ) ... Effect A complete bit expression bit_exp can be placed in parentheses. A bit expression in parentheses can be used as the operand of another bit expression and is not calculated until used in this way. Example Parentheses in bit expressions TYPES output TYPE TABLE OF xstring WI
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbit_brackets.htm"
abapFile: "abenbit_brackets.htm"
keywords: ["do", "data", "types", "abenbit", "brackets"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_string.htm) →  [Expressions and Functions for Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbyte_processing_expr_func.htm) →  [Bit Expressions (bit\_exp)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcompute_bit.htm) → 

bit\_exp - ( )

Syntax

... ( bit\_exp ) ...

Effect

A complete bit expression bit\_exp can be placed in parentheses. A bit expression in parentheses can be used as the operand of another bit expression and is not calculated until used in this way.

Example

Parentheses in bit expressions

TYPES output TYPE TABLE OF xstring WITH EMPTY KEY.
DATA hex1 TYPE xstring VALUE '0011'.
DATA hex2 TYPE xstring VALUE '0101'.
DATA hex3 TYPE xstring VALUE '1100'.
cl\_demo\_output=>display( VALUE output(
  (   hex1 BIT-AND hex2   BIT-OR hex3  )
  ( ( hex1 BIT-AND hex2 ) BIT-OR hex3  )
  (   hex1 BIT-AND ( hex2 BIT-OR hex3 ) ) ) ).

The displayed result is:

1101
1101
0001