  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_guidl.htm'\)) →  [Assignments, Calculations, and Other Types of Data Access](javascript:call_link\('abenassignment_access_guidl.htm'\)) → 

Using Conversion Rules

Background

ABAP contains numerous conversion rules for assignments between data objects of different data types. These rules relate to assignments between:

-   [Elementary data objects](javascript:call_link\('abenconversion_elementary.htm'\))

-   [Elementary data objects and structures](javascript:call_link\('abenconversion_flat-elementary.htm'\))

-   [Structures](javascript:call_link\('abenconversion_struc.htm'\))

-   [Internal tables](javascript:call_link\('abenconversion_itab.htm'\))

-   [Reference variables](javascript:call_link\('abenconversion_references.htm'\))

Assignments between data objects of nearly every different data type are possible. The only prohibited assignments are for data types for data and time specifications. Almost all permitted assignments have a corresponding conversion rule. It is especially important to have rules for assignments between data objects of the same data type, if different technical attributes (such as length or number of decimal places) are allowed. [Lossless assignments](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry") permit only conversions that produce valid values and where no values are lost.

Rule

Avoid unexpected conversion results

Only assign data objects to each other if the content corresponds to the data type of the target field and produces an expected result. Do not exploit every ABAP conversion rule to its full extent. Consider using [lossless assignments](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry").

Details

The ABAP conversion rules are based on the philosophy that assignments should be allowed between as many combinations of values as possible, without raising exceptions. In this situation, ABAP behaves quite differently from other programming languages. In other languages, assignments between different data types are usually handled much more strictly and special conversion routines or explicit casting for specific requested conversions are used.

Although it is convenient to be able to readily assign all possible data objects to each other, there are also disadvantages, such as the [creation of invalid values](javascript:call_link\('abenavoiding_invalid_values_guidl.htm'\) "Guideline"). Another example is [implicit casting](javascript:call_link\('abencasting_guidl.htm'\) "Guideline"), which occurs when assignments are made between elementary data objects and structures, or between incompatible structures.

Even if no invalid values are created, problems still can occur. If valid target values are created from invalid source values, this does not necessarily meet the expectations of the reader and it can make program maintenance considerably difficult. One example of this is the handling of invalid content in the source field in assignments from a character-like type to a byte-like type. Instead of exiting the assignment with an exception, hexadecimal zeros are passed from the first invalid character.

The only solution here are [lossless assignments](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry") with the operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)), which produce an exception in these cases. Even though this is a bit late in the day, the behavior of an assignment with the operator EXACT could be regarded as the normal, expected behavior. Other unexpected behaviors represent an implementation of special rules, which is actually the standard behavior in ABAP.

Bad Example

Anyone who is familiar with all the details of the ABAP conversion rules would probably expect an exception when the text in the following source code is assigned to the numeric text. However, only the digits of the text are respected. Therefore, the target field is given the value "00000042" instead of the value "00000007", which might also be expected.

DATA text TYPE string,
num\_text TYPE n LENGTH 8.
...
text = '4 Apples + 2 Oranges'.
...
num\_text = text.

Good Example

This issue is corrected in the source code below. The [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)) operator is used, which triggers an exception.

...
text = '4 Apples + 2 Oranges'.
...
TRY.
    num\_text = EXACT #( text ).
  CATCH cx\_sy\_conversion\_error.
     ...
ENDTRY.