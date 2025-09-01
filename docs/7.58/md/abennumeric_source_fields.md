  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) →  [Conversion Rules for Elementary Data Objects](javascript:call_link\('abenconversion_elementary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Numeric%20Source%20Fields%2C%20ABENNUMERIC_SOURCE_FIELDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Numeric Source Fields

-   [i, int8, (b, s)](javascript:call_link\('abenconversion_type_ibs.htm'\))
-   [p](javascript:call_link\('abenconversion_type_p.htm'\))
-   [decfloat16, decfloat34](javascript:call_link\('abenconversion_type_decfloat.htm'\))
-   [f](javascript:call_link\('abenconversion_type_f.htm'\))

Hint

Instead of a conversion, [string templates](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry") or the statement [WRITE ... TO](javascript:call_link\('abapwrite_to.htm'\)) can often be used with their formatting options to assign numeric values to text fields and text strings.

Example

Conversion of the integer 100 to different target types. The type-compliant formatted output is 1E+02, 0000000100, 64, 000140.

DATA num TYPE i VALUE 100.
TYPES n10 TYPE n LENGTH 10.
cl\_demo\_output=>display(
  |decfloat34:  { CONV decfloat34( num ) STYLE = SCIENTIFIC }\\n| &&
  |n LENGTH 10: { CONV n10( num ) }\\n| &&
  |xstring:     { CONV xstring( num ) }\\n| &&
  |t:           { CONV t( num ) }\\n| ).

Continue
[Source Field Type i, int8, (b, s)](javascript:call_link\('abenconversion_type_ibs.htm'\))
[Source Field Type p](javascript:call_link\('abenconversion_type_p.htm'\))
[Source Field Type decfloat16, decfloat34](javascript:call_link\('abenconversion_type_decfloat.htm'\))
[Source Field Type f](javascript:call_link\('abenconversion_type_f.htm'\))