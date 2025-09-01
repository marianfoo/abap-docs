  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Modularization Statements](javascript:call_link\('abenabap_language_modularization.htm'\)) →  [Procedures](javascript:call_link\('abenabap_language_procedures.htm'\)) →  [Methods](javascript:call_link\('abenabap_methods.htm'\)) →  [METHOD](javascript:call_link\('abapmethod.htm'\)) → 

METHOD - Internal Additions

Internal Additions

These additions are for internal use only.
Do not use them in application programs.

Addition:

... ... BY KERNEL MODULE p1 ...

Effect

This addition of the statement METHOD defines the method meth as a [kernel method](javascript:call_link\('abenkernel_methods.htm'\)). This means that the method meth is not implemented in ABAP but in the kernel instead by using one of the kernel modules p1 specified here. No statements are allowed between METHOD and ENDMETHOD.

Note

In global classes, the addition must be entered directly in the source code editor in Class Builder and is not specified under the properties of the method there.