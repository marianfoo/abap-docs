# ABAP Keyword Documentation / ABAP − Reference / Obsolete Language Elements / Obsolete Program Editing

Included pages: 3



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenprogram_editing_obsolete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_editing_obsolete.htm)
- [abapset_extended_check.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_extended_check.htm)
- [abapinsert_report_obsolete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_report_obsolete.htm)

**Bundle Contains**: 3 documentation pages
**Version**: ABAP 7.54
**Generated**: 2025-09-01T11:25:45.955Z

---

### abenprogram_editing_obsolete.htm

> **📖 Official SAP Documentation**: [abenprogram_editing_obsolete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_editing_obsolete.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) → 

Obsolete Program Editing

-   [INSERT REPORT - UNICODE ENABLING](javascript:call_link\('abapinsert_report_obsolete.htm'\))

-   [SET EXTENDED CHECK](javascript:call_link\('abapset_extended_check.htm'\))

Continue
[SET EXTENDED CHECK](javascript:call_link\('abapset_extended_check.htm'\))
[INSERT REPORT - UNICODE ENABLING](javascript:call_link\('abapinsert_report_obsolete.htm'\))



**📖 Source**: [abenprogram_editing_obsolete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_editing_obsolete.htm)

### abapset_extended_check.htm

> **📖 Official SAP Documentation**: [abapset_extended_check.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_extended_check.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Editing](javascript:call_link\('abenprogram_editing_obsolete.htm'\)) → 

SET EXTENDED CHECK

[Quick Reference](javascript:call_link\('abapset_extended_check_shortref.htm'\))

Obsolete Syntax

SET EXTENDED CHECK *{*ON*|*OFF*}*.

Effect

This statement uses the addition OFF to deactivate the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") for the following statements, and uses addition ON to reactivate it. A deactivated extended program check should be reactivated in the same program. The extended program check reports a SET EXTENDED CHECK OFF statement without the following SET EXTENDED CHECK ON statement and superfluous SET EXTENDED CHECK ON statements. In the default setting, the extended program check is active.

Notes

-   This statement is obsolete and should not be used anymore. Instead, the messages from the extended program check for individual statements should be hidden using specific [pragmas](javascript:call_link\('abenpragma_glosry.htm'\) "Glossary Entry").
    
-   The statement SET EXTENDED CHECK should not be used in programs that use pragmas to deactivate warnings. This causes an extended program check warning that cannot be deactivated. The same applies to the [pseudo comment](javascript:call_link\('abenpseudo_comment_slin.htm'\)) #EC \*.
    
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



**📖 Source**: [abapset_extended_check.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_extended_check.htm)

### abapinsert_report_obsolete.htm

> **📖 Official SAP Documentation**: [abapinsert_report_obsolete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_report_obsolete.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapinsert_report_obsolete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_report_obsolete.htm)


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Editing](javascript:call_link\('abenprogram_editing_obsolete.htm'\)) → 

INSERT REPORT - UNICODE ENABLING

[Quick Reference](javascript:call_link\('abapinsert_report_shortref.htm'\))

Obsolete Syntax

INSERT REPORT ... UNICODE ENABLING ...

Effect

The addition UNICODE ENABLING of the statement [INSERT REPORT](javascript:call_link\('abapinsert_report.htm'\)) has the same semantics as the addition VERSION which replaces it. If VERSION is specified, UNICODE ENABLING cannot be specified.

Note

Before [ABAP language versions](javascript:call_link\('abenabap_versions.htm'\)) were introduced, the addition UNICODE ENABLING was used exclusively to configure the [Unicode check](javascript:call_link\('abenunicode_check_glosry.htm'\) "Glossary Entry"). The general addition VERSION, on the other hand, makes it possible to configure further versions as well.
