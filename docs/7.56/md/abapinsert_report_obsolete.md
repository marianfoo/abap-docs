  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Editing](javascript:call_link\('abenprogram_editing_obsolete.htm'\)) → 

INSERT REPORT, UNICODE ENABLING

[Short Reference](javascript:call_link\('abapinsert_report_shortref.htm'\))

Obsolete Syntax

INSERT REPORT ... UNICODE ENABLING ...

Effect

The addition UNICODE ENABLING of the statement [INSERT REPORT](javascript:call_link\('abapinsert_report.htm'\)) has the same semantics as the addition VERSION, which replaces it. If VERSION is specified, UNICODE ENABLING cannot be specified.

Hint

Before [ABAP language versions](javascript:call_link\('abenabap_versions.htm'\)) were introduced, the addition UNICODE ENABLING was used exclusively to configure the [Unicode check](javascript:call_link\('abenunicode_check_glosry.htm'\) "Glossary Entry"). The general addition VERSION, on the other hand, makes it possible to configure further versions as well.