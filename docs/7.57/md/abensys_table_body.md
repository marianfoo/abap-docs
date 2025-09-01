  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Internal Table Processing](javascript:call_link\('abenitab_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: *sys*, Obsolete Pseudo Component, ABENSYS_TABLE_BODY, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

\*sys\*, Obsolete Pseudo Component

Obsolete Syntax

... itab-\*sys\* ...

Effect

If itab is an obsolete standard table with a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), instead of specifying itab\[\] to address the table body, the pseudo component itab-\*sys\* can be used. This also addresses the table body.

Hint

If tables with header lines are also to be accessed, only itab\[\] should be used to address the table body, not itab-\*sys\*.

Example

This example shows that itab-\*sys\* has the same meaning as itab\[\].

DATA itab TYPE TABLE OF scarr WITH HEADER LINE.
SELECT \*
       FROM scarr
       INTO TABLE @itab.
ASSERT itab\[\] = itab-\*sys\*.