  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Internal Table Processing](javascript:call_link\('abenitab_obsolete.htm'\)) → 

\*sys\*, Obsolete Pseudo Component

Obsolete Syntax

... itab-\*sys\* ...

Effect

If itab is an obsolete standard table with a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), instead of specifying itab\[\] to address the table body, the pseudo component itab-\*sys\* can be used. This also addresses the table body.

Note

If you also need to access tables with header lines, only use itab\[\] to address the table body, not itab-\*sys\*.

Example

This example shows that itab-\*sys\* has the same meaning as itab\[\].

DATA itab TYPE TABLE OF scarr WITH HEADER LINE.
SELECT \*
       FROM scarr
       INTO TABLE @itab.
ASSERT itab\[\] = itab-\*sys\*.