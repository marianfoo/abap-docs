# ABAP Keyword Documentation / ABAP − Reference / Obsolete Language Elements / Obsolete Program Editing

Included pages: 3


### abenprogram_editing_obsolete.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) → 

Obsolete Program Editing

-   [INSERT REPORT - UNICODE ENABLING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_report_obsolete.htm)

-   [SET EXTENDED CHECK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_extended_check.htm)

Continue
[SET EXTENDED CHECK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_extended_check.htm)
[INSERT REPORT - UNICODE ENABLING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_report_obsolete.htm)


### abapset_extended_check.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Program Editing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_editing_obsolete.htm) → 

SET EXTENDED CHECK

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_extended_check_shortref.htm)

Obsolete Syntax

SET EXTENDED CHECK *{*ON*|*OFF*}*.

Effect

This statement uses the addition OFF to deactivate the [extended program check](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenextended_program_check_glosry.htm "Glossary Entry") for the following statements, and uses addition ON to reactivate it. A deactivated extended program check should be reactivated in the same program. The extended program check reports a SET EXTENDED CHECK OFF statement without the following SET EXTENDED CHECK ON statement and superfluous SET EXTENDED CHECK ON statements. In the default setting, the extended program check is active.

Notes

-   This statement is obsolete and should not be used anymore. Instead, the messages from the extended program check for individual statements should be hidden using specific [pragmas](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpragma_glosry.htm "Glossary Entry").
    
-   The statement SET EXTENDED CHECK should not be used in programs that use pragmas to deactivate warnings. This causes an extended program check warning that cannot be deactivated. The same applies to the [pseudo comment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpseudo_comment_slin.htm) #EC \*.
    
-   In this case, the deactivation of the extended program check can be overridden by selecting Also Display Hidden Messages when the check is called.
    

Example

The SET EXTENDED CHECK statements suppress all messages from the extended program check in the included program section.

SET EXTENDED CHECK OFF.
DATA: a TYPE string,
      b TYPE string.
a = b.
SET EXTENDED CHECK ON.

The following program section shows the recommended procedure to hide the actual messages using the associated pragma.

DATA: a TYPE string ##needed,
      b TYPE string.
a = b.


### abapinsert_report_obsolete.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Program Editing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_editing_obsolete.htm) → 

INSERT REPORT - UNICODE ENABLING

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_report_shortref.htm)

Obsolete Syntax

INSERT REPORT ... UNICODE ENABLING ...

Effect

The addition UNICODE ENABLING of the statement [INSERT REPORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_report.htm) has the same semantics as the addition VERSION which replaces it. If VERSION is specified, UNICODE ENABLING cannot be specified.

Note

Before [ABAP language versions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_versions.htm) were introduced, the addition UNICODE ENABLING was used exclusively to configure the [Unicode check](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenunicode_check_glosry.htm "Glossary Entry"). The general addition VERSION, on the other hand, makes it possible to configure further versions as well.
