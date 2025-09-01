  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_gdl.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abendata_type_obj_gdl.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Data%20Type%20for%20Truth%20Values%2C%20ABENDATAOBJECTS_TRUE_VALUE_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Data Type for Truth Values

Background   

Truth values are results of logical expressions. A truth value is either true or false. ABAP does not yet support Boolean data types and thus does not support data objects for truth values. Therefore, the result of a logical expression cannot be assigned directly to a data object.

It has become common practice to express the truth value true as value X and the truth value false as a blank. There are also Boolean functions that have a logical expression as an argument and are returned as the value X or a blank, depending on the result.

To make it easier to handle truth values expressed in this way, there is a predefined data element ABAP\_BOOLEAN of data type CHAR of length 1 and the type pool abap contains constants abap\_true of value X and abap\_false of value blank as substitutes for a real Boolean data type. There is also a constant abap\_undefined of value \-.

Rule   

Use the data type ABAP\_BOOLEAN for truth values

When working explicitly with truth values, use the data element ABAP\_BOOLEAN as a substitute for a real Boolean data type. A data object declared in this way should have no values other than the predefined constants abap\_true and abap\_false (also abap\_undefined) from type pool ABAP.

Details   

Using the type ABAP\_BOOLEAN and the constants abap\_true and abap\_false makes it clear that truth values are being used here.

In accordance with the rule for [avoiding](javascript:call_link\('abenliterals_guidl.htm'\) "Guideline") literals in operand positions, not only the literals 'X' and ' ' should be used. State queries about the [predicate operators](javascript:call_link\('abenpredicate_operator_glosry.htm'\) "Glossary Entry") IS INITIAL and IS NOT INITIAL or the use of the constant space are also not advisable, because they require knowledge of the technical values of abap\_true and abap\_false, which are not significant in the sense of real Boolean data objects.

The type pool abap contains a third constant for the type ABAP\_BOOLEAN, namely abap\_undefined. However, implementing a three-value logic is only useful and recommended in exceptional cases. In this case, note that abap\_undefined does not contain the initial value for a variable of type ABAP\_BOOLEAN. The initial value is always the value of abap\_false. However, the value of abap\_undefined can, if required, be specified using the addition VALUE when declaring a truth value as the start value.

Hint

The type pool abap also contains a data type abap\_bool as a predecessor of data element ABAP\_BOOLEAN. It is recommended that the data element ABAP\_BOOLEAN is used in new programs because it is more versatile. As a data element it can be also used in ABAP Dictionary objects or in ABAP CDS. A data type from type pool ABAP can be used in ABAP programs only.

Bad Example

The following source code shows an unsuitable emulation of the Boolean data objects not present in ABAP.

DATA is\_found TYPE c LENGTH 1.
...
is\_found = 'X'.
...
IF is\_found IS NOT INITIAL.
   ...
ENDIF.

Good Example

The following source code shows the recommended emulation of the Boolean data objects not present in ABAP.

DATA is\_found TYPE abap\_boolean.
...
is\_found = abap\_true.
...
IF is\_found = abap\_true.
   ...
ENDIF.