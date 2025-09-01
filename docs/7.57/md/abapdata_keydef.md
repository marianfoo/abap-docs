  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [DATA](javascript:call_link\('abapdata.htm'\)) →  [DATA, TABLE OF](javascript:call_link\('abapdata_itab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DATA, tabkeys, ABAPDATA_KEYDEF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on for improvement:)

DATA, tabkeys

[Short Reference](javascript:call_link\('abapdata_shortref.htm'\))

Syntax

... *\[* WITH [key](javascript:call_link\('abapdata_primary_key.htm'\)) *\]*
    *\[* WITH [secondary\_key1](javascript:call_link\('abapdata_secondary_key.htm'\)) *\]* *\[* WITH [secondary\_key2](javascript:call_link\('abapdata_secondary_key.htm'\)) *\]* ...

Effect

Definition of the table keys of an internal table. The following can be defined:

-   A [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") using [key](javascript:call_link\('abapdata_primary_key.htm'\)).
    
    Every internal table has a primary key. The primary key must be defined explicitly for [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry") and [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry"). The specification for the primary key can only be omitted for [standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry"). The primary table key is then defined automatically as a non-unique [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry").
    
-   Multiple [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") with [secondary\_key1](javascript:call_link\('abapdata_secondary_key.htm'\)), [secondary\_key2](javascript:call_link\('abapdata_secondary_key.htm'\)), ...
    
    The specification of secondary keys is optional for all table categories. If no secondary key is specified, the internal table has only one primary key.
    

Example

Declaration of a [hashed table](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") with a unique primary key and two non-unique secondary [sorted keys](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry"), cityfrom\_to and airp\_from\_to.

DATA spfli\_tab TYPE HASHED TABLE OF spfli
  WITH UNIQUE KEY carrid connid
  WITH NON-UNIQUE SORTED KEY cityfrom\_to  COMPONENTS cityfrom cityto
  WITH NON-UNIQUE SORTED KEY airp\_from\_to COMPONENTS airpfrom airpto.

Continue
[DATA, key](javascript:call_link\('abapdata_primary_key.htm'\))
[DATA, secondary\_key](javascript:call_link\('abapdata_secondary_key.htm'\))