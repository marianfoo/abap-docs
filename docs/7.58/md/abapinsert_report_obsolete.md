  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Editing](javascript:call_link\('abenprogram_editing_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20INSERT%20REPORT%2C%20UNICODE%20ENABLING%2C%20ABAPINSERT_REPORT_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

INSERT REPORT, UNICODE ENABLING

[Short Reference](javascript:call_link\('abapinsert_report_shortref.htm'\))

Obsolete Syntax

INSERT REPORT ... UNICODE ENABLING ...

Effect

The addition UNICODE ENABLING of the statement [INSERT REPORT](javascript:call_link\('abapinsert_report.htm'\)) has the same semantics as the addition VERSION, which replaces it. If VERSION is specified, UNICODE ENABLING cannot be specified.

Hint

Before [ABAP language versions](javascript:call_link\('abenabap_versions.htm'\)) were introduced, the addition UNICODE ENABLING was used exclusively to configure the [Unicode check](javascript:call_link\('abenunicode_check_glosry.htm'\) "Glossary Entry"). The general addition VERSION, on the other hand, makes it possible to configure further versions as well.