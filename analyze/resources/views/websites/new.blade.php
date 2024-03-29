@section('site_title', formatTitle([__('New'), __('Website'), config('settings.title')]))

@include('shared.breadcrumbs', ['breadcrumbs' => [
    ['url' => isset($admin) ? route('admin.dashboard') : route('dashboard'), 'title' => isset($admin) ? __('Admin') : __('Home')],
    ['title' => __('New')],
]])

<h2 class="mb-3 d-inline-block">{{ __('New') }}</h2>

<div class="card border-0 shadow-sm">
    <div class="card-header">
        <div class="row">
            <div class="col">
                <div class="font-weight-medium py-1">{{ __('Website') }}</div>
            </div>
        </div>
    </div>

    <div class="card-body">
        @include('shared.message')

        <form action="{{ isset($admin) ? route('admin.websites.new') : route('websites.new') }}" method="post" enctype="multipart/form-data">
            @csrf

            <div class="form-group">
                <label for="i_url">{{ __('URL') }}</label>
                <input type="text" dir="ltr" name="url" class="form-control{{ $errors->has('url') ? ' is-invalid' : '' }}" id="i_url" value="{{ old('url') }}" placeholder="https://example.com">
                @if ($errors->has('url'))
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $errors->first('url') }}</strong>
                    </span>
                @endif
            </div>

            <hr>

            <div class="form-group">
                <label>{{ __('Privacy') }}</label>
                <div class="form-group mb-0">
                    <div class="form-row">
                        <div class="col-12 col-lg-4">
                            <div class="custom-control custom-radio">
                                <input type="radio" id="i_privacy1" name="privacy" class="custom-control-input{{ $errors->has('privacy') ? ' is-invalid' : '' }}" value="1" @if(old('privacy') == null || old('privacy') == 1) checked @endif>
                                <label class="custom-control-label cursor-pointer w-100" for="i_privacy1">
                                    <div>{{ __('Private') }}</div>
                                    <div class="small text-muted">{{ __('Stats accessible only by you.') }}</div>
                                </label>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4">
                            <div class="custom-control custom-radio">
                                <input type="radio" id="i_privacy0" name="privacy" class="custom-control-input{{ $errors->has('privacy') ? ' is-invalid' : '' }}" value="0" @if(old('privacy') == 0 && old('privacy') != null) checked @endif>
                                <label class="custom-control-label cursor-pointer w-100" for="i_privacy0">
                                    <div>{{ __('Public') }}</div>
                                    <div class="small text-muted">{{ __('Stats accessible by anyone.') }}</div>
                                </label>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4">
                            <div class="custom-control custom-radio">
                                <input type="radio" id="i_privacy2" name="privacy" class="custom-control-input{{ $errors->has('privacy') ? ' is-invalid' : '' }}" value="2" @if(old('privacy') == 2) checked @endif>
                                <label class="custom-control-label cursor-pointer w-100" for="i_privacy2">
                                    <div>{{ __('Password') }}</div>
                                    <div class="small text-muted">{{ __('Stats accessible by password.') }}</div>
                                </label>
                                <div id="passwordInput" class="{{ (old('privacy') != 2 ? 'd-none' : '')}}">
                                    <div class="input-group mt-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text cursor-pointer" data-enable="tooltip" data-title="{{ __('Show password') }}" data-password="i_password" data-password-show="{{ __('Show password') }}" data-password-hide="{{ __('Hide password') }}">@include('icons.security', ['class' => 'width-4 height-4 fill-current text-muted'])</div>
                                        </div>
                                        <input id="i_password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" value="{{ old('password') }}" autocomplete="new-password">
                                    </div>
                                    @if ($errors->has('password'))
                                        <span class="invalid-feedback d-block" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                    @if ($errors->has('privacy'))
                        <span class="invalid-feedback d-block" role="alert">
                        <strong>{{ $errors->first('privacy') }}</strong>
                    </span>
                    @endif
                </div>
            </div>

            <hr>

            <div class="form-group">
                <label>{{ __('Notifications') }}</label>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" name="email" value="1" class="custom-control-input {{ $errors->has('email') ? ' is-invalid' : '' }}" id="customCheckbox2" @if(old('email')) checked @endif>
                    <label class="custom-control-label cursor-pointer" for="customCheckbox2">
                        <div>{{ __('Email') }}</div>
                        <div class="small text-muted">{{ __('Periodic email reports.') }}</div>
                        @if ($errors->has('email'))
                            <span class="invalid-feedback d-block" role="alert">
                                <strong>{{ $errors->first('email') }}</strong>
                            </span>
                        @endif
                    </label>
                </div>
            </div>

            <hr>

            <div class="form-group">
                <label for="i_exclude_ips">{{ __('Exclude IPs') }}</label>
                <textarea name="exclude_ips" id="i_exclude_ips" class="form-control{{ $errors->has('exclude_ips') ? ' is-invalid' : '' }}" placeholder="{{ __('One per line.') }}">{{ old('exclude_ips') }}</textarea>
                @if ($errors->has('exclude_ips'))
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $errors->first('exclude_ips') }}</strong>
                    </span>
                @endif
            </div>

            <div class="form-group">
                <div class="custom-control custom-checkbox">
                    <input type="hidden" name="exclude_bots" value="0">
                    <input type="checkbox" name="exclude_bots" value="1" class="custom-control-input {{ $errors->has('exclude_bots') ? ' is-invalid' : '' }}" id="customCheckbox3" @if(old('exclude_bots') || old('exclude_bots') == null) checked @endif>
                    <label class="custom-control-label cursor-pointer" for="customCheckbox3">
                        <div>{{ __('Exclude bots') }}</div>
                        <div class="small text-muted">{{ __('Exclude common bots from being tracked.') }}</div>
                        @if ($errors->has('exclude_bots'))
                            <span class="invalid-feedback d-block" role="alert">
                                <strong>{{ $errors->first('exclude_bots') }}</strong>
                            </span>
                        @endif
                    </label>
                </div>
            </div>

            <hr>

            <div class="form-group">
                @include('shared.tracking_code')
            </div>

            <button type="submit" name="submit" class="btn btn-primary">{{ __('Save') }}</button>
        </form>
    </div>
</div>