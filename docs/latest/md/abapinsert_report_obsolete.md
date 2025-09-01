  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Program Editing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_editing_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20INSERT%20REPORT%2C%20UNICODE%20ENABLING%2C%20ABAPINSERT_REPORT_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

INSERT REPORT, UNICODE ENABLING

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_report_shortref.htm)

Obsolete Syntax

INSERT REPORT ... UNICODE ENABLING ...

Effect

The addition UNICODE ENABLING of the statement [INSERT REPORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_report.htm) has the same semantics as the addition VERSION, which replaces it. If VERSION is specified, UNICODE ENABLING cannot be specified.

Hint

Before [ABAP language versions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_versions.htm) were introduced, the addition UNICODE ENABLING was used exclusively to configure the [Unicode check](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunicode_check_glosry.htm "Glossary Entry"). The general addition VERSION, on the other hand, makes it possible to configure further versions as well.