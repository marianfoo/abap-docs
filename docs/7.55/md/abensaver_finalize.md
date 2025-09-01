  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_business_objects.htm'\)) →  [RAP in ABAP](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [ABAP Behavior Pools (ABP)](javascript:call_link\('abenabap_behavior_pools.htm'\)) →  [ABP - Saver Class](javascript:call_link\('abenabp_saver_class.htm'\)) → 

Method FINALIZE

\* Work in progress \*

The method finalize of the local [saver class](javascript:call_link\('abenabp_saver_class.htm'\)) is the first method of the saver sequence of the behavior implementation of a business object. The method is used to make any final calculations and data modifications before the method [save](javascript:call_link\('abensaver_method_save.htm'\)) saves data in the database.

The method finalize can return failed keys and messages. For this purpose, there are the [output parameters](javascript:call_link\('abenrpm_export_parameters.htm'\)) failed and reported.

If the finalize method returns an error in the output parameter failed, the saver sequence is terminated. The cleanup method is called to discard all changes made to the data in the current [LUW](javascript:call_link\('abenluw_glosry.htm'\) "Glossary Entry") and to clean up the transactional buffer.

If the finalize method does not report an error, the subsequent method [check\_before\_save](javascript:call_link\('abensaver_check_before_save.htm'\)) is called.

Remarks

-   The parameter mapped is part of the signature of the method finalize. It is not, however, used.

-   The implementation of the method finalize is not mandatory.