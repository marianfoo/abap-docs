  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Behavior Implementations](javascript:call_link\('abenabap_behavior_implementations.htm'\)) →  [Saver Class](javascript:call_link\('abenrpm_saver_class.htm'\)) → 

Method FINALIZE

The method finalize of the local [saver class](javascript:call_link\('abenrpm_saver_class.htm'\)) is the first method of the saver sequence of the behavior implementation of a business object. The method is used to make any final calculations and data modifications before the method [save](javascript:call_link\('abensaver_method_save.htm'\)) saves data in the database.

The method finalize can return failed keys and messages. For this pupose, there are the [output parameters](javascript:call_link\('abenrpm_export_parameters.htm'\)) failed and reported.

If the finalize method returns an error in the output parameter failed, the saver sequence is terminated. The cleanup method is called to discard all changes made to the data in the current [LUW](javascript:call_link\('abenluw_glosry.htm'\) "Glossary Entry") and to clean up the transactional buffer.

If the finalize method does not report an error, the subsequent method [check\_before\_save](javascript:call_link\('abensaver_check_before_save.htm'\)) is called.

Remarks

-   The parameter mapped is part of the signature of the method finalize. It is not, however, used.

-   The implementation of the method finalize is not mandatory.