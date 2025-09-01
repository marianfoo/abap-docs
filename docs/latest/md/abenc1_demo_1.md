  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for ABAP Cloud](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for ABAP Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C1 Contract Rules](javascript:call_link\('abenc1_contract_rules.htm'\)) →  [C1 Contract Rules for API Consumers](javascript:call_link\('abenc1_consumer_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Example%3A%20Consumption%20of%20APIs%20with%20C1%20Contract%2C%20ABENC1_DEMO_1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

Example: Consumption of APIs with C1 Contract

The first part of the example simulates data types from the ABAP Dictionary by data types defined in the program. The second part represents consumer code working with these data types in an unfavorable way by mixing them with locally defined types. If [changes allowed by C1 contract](javascript:call_link\('abenc1_provider_rules.htm'\)) are applied to the pseudo external types, syntax errors and exceptions occur.

\*Pseudo DDIC types
TYPES:
  ddic\_de\_i TYPE i,
  ddic\_de\_c TYPE c LENGTH 3,
  BEGIN OF ddic\_struc,
    text TYPE ddic\_de\_c,
    int  TYPE ddic\_de\_i,
  END OF ddic\_struc.
DATA ddic\_dbtab TYPE HASHED TABLE OF ddic\_struc WITH UNIQUE key text.
\*Consumer Code
DATA int TYPE ddic\_de\_i.
"Exception when DDIC\_DE\_I is changed to int8
"and int exceeds value range of i
DO int TIMES.
  ...
ENDDO.
"Syntax error when DDDIC\_DE\_I is changed to int8
DATA dref TYPE REF TO i.
dref = REF #( int ).
"Syntax error when DDIC\_DE\_I is changed to int8
DATA itab TYPE SORTED TABLE OF i WITH NON-UNIQUE KEY table\_line.
INSERT int INTO TABLE itab.
DATA char TYPE ddic\_de\_c.
"Exception when length of DDIC\_DE\_C is increased
"and char contains more than three relevant characters
SELECT carrname
       FROM scarr
       WHERE carrid = @char
       INTO TABLE @FINAL(result).
DATA:
  struc1 TYPE ddic\_struc,
  BEGIN OF struc2,
    text TYPE c LENGTH 3,
    int  TYPE i,
  END OF struc2.
"Syntax errors when DDIC\_DE\_I is changed to int8
"or when the length of DDIC\_DE\_C is increased
"or when a component is added to DDIC\_STRUC
struc1 = struc2.
IF struc1 = struc2.
  ...
ENDIF.
"Syntax error when DDIC\_DE\_I is changed to int8
"or when the length of DDIC\_DE\_C is increased
"or when a component is added to DDIC\_STRUC
FIELD-SYMBOLS <fs> TYPE ddic\_struc.
ASSIGN struc2 TO <fs> CASTING.
"Syntax error when DDIC\_DE\_I is changed to int8
"or when the length of DDIC\_DE\_C is increased
"or when a component is added to DDIC\_STRUC
SELECT single \*
       from @ddic\_dbtab as dbtab
       into @struc2.