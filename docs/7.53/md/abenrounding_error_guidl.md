  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_guidl.htm'\)) →  [Assignments, Calculations, and Other Types of Data Access](javascript:call_link\('abenassignment_access_guidl.htm'\)) → 

Rounding Errors

Background

In the case of assignments between floating point numbers (types f, decfloat16, decfloat34) and fixed point numbers (types i and p), rounding errors usually occur that produce an incorrect value. However, values of type p (and also decfloat16 and decfloat34) assigned to type f are not always displayed accurately.

Rule

Avoid unnecessary rounding errors

Avoid unnecessary or frequent conversions between floating point numbers and fixed numbers as this can cause rounding errors.

Details

In a program, the value of a number should always be stored for as long as possible in a data object with the numeric data type of the highest required level of accuracy. This applies especially to saving intermediate results of calculations.

The data input or output requirements (for example, formatting on the screen or in a spool list) cannot change the way numbers are saved internally. If a number is to be formatted using a specific number of decimal places, the actual value should not be converted to the corresponding packed number. Instead, a suitable format should be configured in a character-like field using the relevant constructs. These are character string templates and previously the statement WRITE TO.

Bad Example

The following source code shows a calculation where results can be assigned to a numeric field intended for output. The result 55.55 is rounded to 56.00.

DATA: output     TYPE p DECIMALS 2,
      percentage TYPE decfloat34,
      value TYPE decfloat34.
percentage = '55.55'.
value      = '100.0'.
output = percentage / 100.
output = value \* output.

Good Example

The following source code corrects the above example by separating the code into data objects intended for calculations and a character-like data object for the formatted output.

DATA: result TYPE decfloat34,
      percentage TYPE decfloat34,
      value TYPE decfloat34.
DATA output TYPE c LENGTH 40.
percentage = '55.55'.
value      = '100.0'.
result = percentage / 100.
result = value \* result.
WRITE result TO output DECIMALS 2 EXPONENT 0.