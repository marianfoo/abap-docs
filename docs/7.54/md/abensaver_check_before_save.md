  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Behavior Implementations](javascript:call_link\('abenabap_behavior_implementations.htm'\)) →  [Saver Class](javascript:call_link\('abenrpm_saver_class.htm'\)) → 

Method CHECK\_BEFORE\_SAVE

The method check\_before\_save of the local [saver class](javascript:call_link\('abenrpm_saver_class.htm'\)) is the second method of the saver sequence of the behavior implementation of a business object. The method check\_before\_save is used to check the application buffer for consistency before the method [save](javascript:call_link\('abensaver_method_save.htm'\)) saves data in the database.

The method check\_before\_save can return failed keys and messages. For this pupose, there are the [output parameters](javascript:call_link\('abenrpm_export_parameters.htm'\)) failed and reported.

If the check\_before\_save method returns an error in the output parameter failed, the saver sequence is terminated. The [cleanup](javascript:call_link\('abensaver_method_cleanup.htm'\)) method is called to discard all changes made to the data in the current [LUW](javascript:call_link\('abenluw_glosry.htm'\) "Glossary Entry") and to clean up the transactional buffer.

If the method check\_before\_save does not return an error, the point has been reached after which a successful save is guaranteed for all involved business objects. The subsequent method [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)) is called.

Remarks

-   The parameter mapped is part of the signature of the method check\_before\_save. It is not, however, used.

-   The implementation of the method check\_before\_save is not mandatory.