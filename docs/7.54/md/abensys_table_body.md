  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_internal_obsolete.htm) →  [Obsolete Internal Table Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_obsolete.htm) → 

\*sys\*, Obsolete Pseudo Component

Obsolete Syntax

... itab-\*sys\* ...

Effect

If itab is an obsolete standard table with a [header line](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenheader_line_glosry.htm "Glossary Entry"), instead of specifying itab\[\] to address the table body, the pseudo component itab-\*sys\* can be used. This also addresses the table body.

Note

If you also need to access tables with header lines, only use itab\[\] to address the table body, not itab-\*sys\*.

Example

This example shows that itab-\*sys\* has the same meaning as itab\[\].

DATA itab TYPE TABLE OF scarr WITH HEADER LINE.
SELECT \*
       FROM scarr
       INTO TABLE @itab.
ASSERT itab\[\] = itab-\*sys\*.