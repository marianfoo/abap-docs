  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) →  [Conversion Rules for Elementary Data Objects](javascript:call_link\('abenconversion_elementary.htm'\)) → 

Numeric Source Fields

-   [i, int8, (b, s)](javascript:call_link\('abenconversion_type_ibs.htm'\))

-   [p](javascript:call_link\('abenconversion_type_p.htm'\))

-   [decfloat16, decfloat34](javascript:call_link\('abenconversion_type_decfloat.htm'\))

-   [f](javascript:call_link\('abenconversion_type_f.htm'\))

Note

Instead of a conversion, [string templates](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry") or the statement [WRITE ... TO](javascript:call_link\('abapwrite_to.htm'\)) can often be used with their formatting options to assign numeric values to text fields and text strings.

Example

Conversion of the integer 100 to different target types. The type-friendly formatted output is 1E+02, 0000000100, 64, 000140.

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